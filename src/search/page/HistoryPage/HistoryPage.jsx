import React from 'react';
import styled from 'styled-components';
import { Button as BaseButton } from 'antd';
import 'antd/lib/button/style/css';

const Rigth = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`;

const Button = styled(BaseButton)`
  border-color: #108ee9;
  margin: 5px;
`;

const H2 = styled.h2`
    padding-bottom: 30px;
`

const HistoryPage = ({ histories, history }) => (<div>
  <H2>History result page</H2>
  <div className="row">
    {histories.map(hist =>
      (<div className="col-md-6">
        <div className="thumbnail">
          <Rigth>
            <Button
              type="primary"
              ghost
              shape="circle"
              icon="double-right"
              size="large"
              onClick={() => history.push(hist.url)}
            />
          </Rigth>
          <img src={hist.base64} />
        </div>
      </div>))}
  </div>
</div>);

export default HistoryPage;
