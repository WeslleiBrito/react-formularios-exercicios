import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { useForm } from '../../hooks/useForm'

function MainPage() {

  const [form, onChange] = useForm({ nome: "", modulos: "", tecnologias: "", responsavel: "" })

  const enviarForm = (event) => {
    event.preventDefault()
    console.log(form.responsavel.slice(0, 3))
    console.log(form.responsavel.length > 4)
    if (!form.responsavel.slice(1, 3).includes(" ") && form.responsavel.length > 4) {
      console.log(form)
    }

  }

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={enviarForm}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input
          id="nome"
          name='nome'
          value={form.nome}
          onChange={onChange}
          required

        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input
          id="modulos"
          name='modulos'
          value={form.modulos}
          onChange={onChange}
          pattern='^[2-9]|[1-9]\d+$'
          title='O número de módulos é inferiaor a dois'
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input
          id="tecnologias"
          name='tecnologias'
          value={form.tecnologias}
          onChange={onChange}
          required
        />

        <label htmlFor="responsavel">Responsável: </label>
        <Input
          id="responsavel"
          name='responsavel'
          value={form.responsavel}
          onChange={onChange}
          required
          pattern='^[a-zA-Z\s]{5,}$'
          title='O nome deve possuir pelo menos 5 caracters e ser composto apenas por letras.'
        />
        <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
