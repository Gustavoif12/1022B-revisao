import { ChangeEvent, useState } from "react";

function Revisao():JSX.Element{
    const [a,setA] = useState(0)
    const [b,setB] = useState(0)
    function soma(a:number,b:number):number{
        return a+b
    }
    function trataInput1(e:ChangeEvent<HTMLInputElement>){
        setA(Number(e.target.value))
    }
    function trataInput2(e:ChangeEvent<HTMLInputElement>){
        setB(Number(e.target.value))
    }

    // Faça uma função que a partir dos 2 campus de input
    // Crie uma string com a sequencia dos números:

    //EX: listaNumeros(10,15) 
    //retorno "10,11,12,13,14,15,"

    function listaNumeros(a1:number,b1:number):string{
        let lista:string = ""
        //Fazer um processamento dos números
        //let str = "10,"
        let i = a1
        while(i>=b1){
            lista = lista.concat(String(i)+",")
            i--
        }
        return lista
    }


    return( 
        <>
            <h1>Componente</h1>
            <input type="number" onChange={trataInput1}/>
            <input type="number" onChange={trataInput2}/>
            <h1>{listaNumeros(a,b)}</h1>
        </>
    )
}
export default Revisao;
