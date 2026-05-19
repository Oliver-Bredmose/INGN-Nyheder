import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchblogs } from "../../Hygraph-fetch";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom"

function Artikel() {
  const { id } = useParams()
  console.log(id)

  return (
    <div>
      <h1>Artikel side</h1>
    </div>
  )
}
export default Artikel