import React from 'react';
import { Col, Label, Button, Form, FormControl, HelpBlock, FormGroup, ControlLabel, Modal, Panel, ButtonToolbar, Table } from "react-bootstrap"

export default class Search extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render(){
        const styles = {
            button: {
              width: '100%',
              marginTop: 28
            }, 
            marginTitulo: {
              marginTop: 50
            },
            sizeFields: {
              fontSize: '13px'
            }
          };
        return(
        
        <div>
           
           <h1 style={ styles.marginTitulo }><Label>Búsqueda de Pacientes</Label></h1>
           <h6 style={{color:"gray"}}>Llenar Formularios de Ambulatorio - La búsqueda se habilita si el paciente ha pasado por Admisiones</h6>

            <Form>
              <Panel bsStyle="info">
                <Panel.Body>
                  <FormGroup controlId="variableID">
                    <Col md={12}>
                      <ControlLabel style={ styles.sizeFields }>Ingresar cédula o código de servicio</ControlLabel>
                      {""}
                      <FormControl data-id="" type="text" value={this.props.state.ID} onChange={this.props.handleChangeID}/>
                      <FormControl.Feedback/>
                    </Col>                             
                </FormGroup> 
                  <Col md={12}>
                    <Button bsStyle="success" style={ styles.button } onClick={this.props.handleClickSearch}>BUSCAR</Button>                            
                  </Col>
                </Panel.Body>
              </Panel>
            </Form>
           
           {/* <input type="text" value={this.props.state.ID} onChange={this.props.handleChangeID}/> */}
            {/* <button onClick={this.props.handleClickSearch}>BUSCAR</button>         */}
        </div>);
    }
    
}