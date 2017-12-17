import React from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './core/store';
import {
    IndexPage,
    NotFoundPage,
    ValidatePage,
    ResultPage,
    HistoryPage,
    InfoPage } from './page';
import { MarvinEditorView, PageStepsView } from './page/WrappedContainers';
import { URL } from '../config';

const Main = ({ children }) => (
    <div className="container">
      <PageStepsView />
      <MarvinEditorView />
        {children}
    </div>
);

export default (
    <Provider store={store}>
      <HashRouter>
        <Main>
          <Switch>
            <Route exact path={URL.INDEX} component={IndexPage} />
            <Route exact path={URL.VALIDATE} component={ValidatePage} />
            <Route exact path={URL.RESULT} component={ResultPage} />
            <Route exact path={URL.HISTORY} component={HistoryPage} />
            <Route exact path={URL.INFO} component={InfoPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Main>
      </HashRouter>
    </Provider>
);
