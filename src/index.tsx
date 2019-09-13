/* React */
import React from 'react'
import ReactDOM from 'react-dom'

/* React Util */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout, Spin } from 'antd'

/* Pages */
import { Index } from './pages/Index'
import { NotFound } from './pages/404'
import { LearnPage } from './pages/Learn'
import { TasksPage } from './pages/Tasks'
import { TaskDetailPage } from './pages/TaskDetail'
import { SubmissionsPage } from './pages/Submissions'
import { SubmissionDetailPage } from './pages/SubmissionDetail'

/* React Component */
import { Nav } from './components/nav/Nav'

/* Static */
import './assets/css/init.css'
import './assets/css/main.css'
import './assets/material-icon/material-icons.css'
import './assets/css/responsive.css'
import firebase from 'firebase'

/* Redux */
import * as actionCreators from './redux/actions/index'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { Provider, connect } from 'react-redux'
import { firebaseConfig } from './config'

import { store } from './redux'
import styled from 'styled-components'
import { LoginPage } from './components/auth/Login'
import { RegisterPage } from './components/auth/Register'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { SettingPage } from './pages/Setting'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.app().functions('asia-east2')
}

const { Header, Content, Footer } = Layout

const SpinWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface IRootProps {
  onInitialLoad: () => void
  user: any
  taskStatus: any
  submissionsListStatus: any
  submissionDetailStatus: any
}
class Root extends React.Component<IRootProps> {
  componentDidMount() {
    this.props.onInitialLoad()
  }
  render() {
    return (
      <React.Fragment>
        {this.props.user === 'LOADING' ? (
          <SpinWrapper>
            <Spin tip="Loading..." size="large" />
          </SpinWrapper>
        ) : (
          <Router>
            <Layout>
              <Header
                style={{
                  background: 'white',
                  position: 'fixed',
                  zIndex: 100,
                  width: '100%'
                }}
              >
                <Nav />
              </Header>
              <Content style={{ marginTop: 64 }}>
                <Switch>
                  <Route exact path="/" component={Index} />
                  <Route exact path="/tasks" component={TasksPage} />
                  <Route exact path="/tasks/:id" component={TaskDetailPage} />
                  <Route
                    exact
                    path="/submissions"
                    component={SubmissionsPage}
                  />
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/register" component={RegisterPage} />
                  <Route
                    exact
                    path="/submissions/:id"
                    component={SubmissionDetailPage}
                  />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/learn" component={LearnPage} />
                  <Route exact path="/learn/:page" component={LearnPage} />
                  <Route exact path="/setting" component={SettingPage} />
                  <Route component={NotFound} />
                </Switch>
              </Content>
              <Footer style={{ textAlign: 'center' }}>IPST ©2019</Footer>
            </Layout>
          </Router>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps: (state: any) => any = state => {
  return {
    user: state.user.user,
    taskStatus: state.tasks.status,
    submissionsListStatus: state.submissions.submissionsListStatus,
    submissionDetailStatus: state.submissions.detailStatus
  }
}

const mapDispatchToProps: (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => any = dispatch => {
  return {
    onInitialLoad: () => {
      dispatch(actionCreators.fetchUser())
    }
  }
}

const RootPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root) as any

ReactDOM.render(
  <Provider store={store}>
    <RootPage />
  </Provider>,
  document.getElementById('react') as HTMLElement
)
