import React from "react";
import ReactDOM from "react-dom";

//ReactDOM.render(<p>Apex Ensino</p>, document.getElementById("root"));


//Lista
// let lista = (
// <fieldset>
//     <ul>
//         <li>html</li>
//         <li>css</li>
//         <li>Javascript</li>
//         <li>Node</li>
//         <li>core</li>
//         <li>dual</li>
//         <li>tres</li>
//         <li>dois</li>
//     </ul>
// </fieldset>
// );


//Formulario
// let form = (
// <fieldset>
//     <form>
//         <label>Nome</label>
//         <input type="text"></input><br></br>
//         <label>Senha</label>
//         <input type="password"></input><br></br>
//         <label>Email</label>
//         <input type="email"></input><br></br>
//         <input type="submit"></input>
//     </form>
// </fieldset>
// );

//video

// let video = (
//     <iframe width="25%" height="250" class="yvideo" id="IrxVowFuEu0"
//        src="https://www.youtube.com/embed/IrxVowFuEu0"			    
//        frameborder="0" allowfullscreen>
// </iframe>
// )
// //Tabela
// let tab = (
// <fieldset>    
//     <table border="1">
//         <tr>
//             <th>Produto</th>
//             <th>Marca</th>
//             <th>Valor</th>
//         </tr>
//         <tr>
//             <td>mamaco</td>
//             <td>Lacoste</td>
//             <td>10</td>
//         </tr>
//         <tr>
//             <td>mamaco2</td>
//             <td>lacoste</td>
//             <td>20</td>
//         </tr>
//         <tr>
//             <td>Mascote</td>
//             <td>Adidas</td>
//             <td>30</td>
//         </tr>
//         <tr>
//             <td>rei Lacoste</td>
//             <td>Nike</td>
//             <td>350</td>
//         </tr>
//         <tr>
//             <td>Faixa</td>
//             <td>Lacoste</td>
//             <td>50</td>
//         </tr>
//     </table>
// </fieldset>
// );

// const element = <h1>Hello, world</h1>;
// function tick (){
//     const element = (
//         <div>
//             <h1>Corno Manso</h1>
//             <p>Paragrafo do Corno Manso</p>
//             <p>Paragrafo do Corno Manso2</p>
//         </div>
//     )
    //ReactDOM.render(element,document.getElementById("palavras"))
// };
//calendario
// let calendario = (
//     <table cellSpacing="1" cellpadding="1" border="1">
//             <thead>
//                 <tr>
//                     <td colSpan="7">Janeiro 2022</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>DOM</td>
//                     <td>SEG</td>
//                     <td>TER</td>
//                     <td>QUA</td>
//                     <td>QUI</td>
//                     <td>SEX</td>
//                     <td>SAB</td>
//                 </tr>
//                 <tr>
//                     <td colSpan="5"></td>
//                     <td>1</td>
//                     <td>2</td>
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     <td>4</td>
//                     <td>5</td>
//                     <td>6</td>
//                     <td>7</td>
//                     <td>8</td>
//                     <td>9</td>
//                 </tr>
//                 <tr>
//                     <td>10</td>
//                     <td>11</td>
//                     <td>12</td>
//                     <td>13</td>
//                     <td>14</td>
//                     <td>15</td>
//                     <td>16</td>
//                 </tr>
//                 <tr>
//                     <td>17</td>
//                     <td>18</td>
//                     <td>19</td>
//                     <td>20</td>
//                     <td>21</td>
//                     <td>22</td>
//                     <td>23</td>
//                 </tr>
//                 <tr>
//                     <td>24</td>
//                     <td>25</td>
//                     <td>26</td>
//                     <td>27</td>
//                     <td>28</td>
//                     <td>29</td>
//                     <td>30</td>
//                 </tr>
//             </tbody>
//             <tfoot>
//                 <tr>
//                     <td colSpan="7">Rodapé</td>
//                 </tr>
//             </tfoot>
//         </table>
//     )

    //aula dia 18/04
    // let texto = 'testes';

    // const exp = <h1>{22 + 44}</h1>

    // const txt2 = (
    //     <div>
    //         <h1>bao</h1>
    //         <h2>Bao 2 </h2>
    //     </div>
    // )


    //Proximo Exemplo 18/04
    // class Curso extends React.Component {
    //     render(){
    //         return(
    //             <input type="text" value="ESCREVE AQUI CORNAO"></input>
    //         )
    //     }
    // }
    // class Pessoa extends React.Component {
    //     render(){
    //         return(
    //             <div>
    //                 <h1>Ola Apex Ensino</h1>
    //                 <Curso />
    //             </div>
    //         )
    //     }
    // }

    // class Form extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    //     render(){
    //         return(
    //             <form>
    //                 <input type="text" className="nome" defaultValue = {this.props.nome} placeholder={this.props.plchld}/>
    //                 <input type="text"className="salario" value = {this.props.salario} />
    //             </form>
    //         )
    //     }
    // };

    class Form extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                valor : ""
            }
        }
        acao = (elemento) => {
            let cons = 0;
            let vow = 0;
             vow = (elemento.target.value.match(/[aeiou]/gi) || []).length;
             cons = parseInt(elemento.target.value.length) - parseInt(vow);
            let res = vow + " " + cons;

            this.setState({valor:res});
        }
        render(){
            return(
                <div>
                    {/* <input type="text" defaultValue={this.props.nome} />
                    <input type="text" value={this.props.salario} />
                    <h1>{this.props.nome}</h1>
                    <h1>{this.props.salario}</h1> */}

                    {/* <h1>{this.state.valor}</h1>
                    <input type="text" onChange={this.acao} />
                    <h2>{this.state.valor.length}</h2> */}
                    <h1>{this.state.valor}</h1>
                    <input type="text" onChange={this.acao} />
                </div>
            
            );
        }
    }




//Parte dos React Dom
// ReactDOM.render(video,document.getElementById("video"));
// ReactDOM.render(lista,document.getElementById("root"));
// ReactDOM.render(form, document.getElementById("form"));
// ReactDOM.render(tab,document.getElementById("tab"));
// ReactDOM.render(calendario,document.getElementById("cal"));
// ReactDOM.render(element,document.getElementById("element"));
    ReactDOM.render(
    <Form nome="Matheus" salario="R$10,0"/>,
    document.getElementById("root"));

// setInterval(tick,1000);

