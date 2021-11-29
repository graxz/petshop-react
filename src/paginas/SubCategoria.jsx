import React from 'react'
import '../assets/css/blog.css'
import ListaPost from '../components/ListaPost'
import { useParams } from 'react-router-dom'

const SubCategoria = () => {
  const { subcategoria } = useParams()

  return (
    <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
  )
}

export default SubCategoria
