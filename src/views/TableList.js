import React, { useEffect } from 'react';
import boot from '../plugins/index'
import Card from '../components/Card/Card';
const TableList = (props) => {

    return (
        <>
            <div className="content">
                <boot.Container fluid>
                    <boot.Row>
                        <boot.Col md={12}>
                            <Card
                                title="Striped Table with Hover"
                                category="Here is a subtitle for this table"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <boot.Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>hi</th>
                                                <th>hi</th>
                                                <th>hi</th>
                                                {/* {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })} */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })} */}
                                            <tr>
                                                <td>dsfs</td>
                                                <td>dsfs</td>
                                                <td>dsfs</td>
                                            </tr>
                                        </tbody>
                                    </boot.Table>
                                }
                            />
                        </boot.Col>
                    </boot.Row>
                </boot.Container>
            </div>
        </>
    );
}




export default TableList;