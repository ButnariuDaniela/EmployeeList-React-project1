import React from 'react';
import Layout from '../../components/Layout/Layout';

function About() {
  return (
    <div>
      <Layout>
        <div className='container min-max'>
          <h1 className='display-5 my-4'>Despre proiect ...</h1>
          <p>Proiectul este facut in cadrul cursului <i>JavaScript Advanced - React </i> organizat de Telecom Academy. </p>
          <h1 className='display-5 my-4'>Cerintele proiectului:</h1>
          <ul>
            <li>Adaugati doua proprietati noi pentru fiecare user: salariu si imagine. Dati valori pentru acestea si afisati-le pe ecran.</li>
            <li>Adaugati un nou input de tip culoare. La schimbarea culorii lui, culoarea textului pentru intreaga aplicatie se va schimba.</li>
            <li>Creati doua componente noi, numite PostList si PostItem. PostList va fi o lista de componente de tip PostItem. In componenta PostList, atunci cand este afisata pe ecran, faceti un request catre endpoint-ul /posts, de pe JSON placeholder, afisand datele preluate. Practic, o singura data veti face request catre url-ul https://jsonplaceholder.typicode.com/posts.</li>
            <li>Creati doua butoane: Afisează useri si Afisează postari. Implicit, vor fi afisati userii. La click pe oricare din cele doua butoane, va fi actualizata lista afisata pe ecran. Daca dam click pe butonul Afiseaza useri va fi afisata lista userilor, daca dam click pe Afiseaza postari va fi afisata lista postarilor.</li>
            <li>Adaugati pe fiecare user un buton de stergere.</li>
            <li>Faceti putina validare a datelor. Spre exemplu, sa nu poata fi introdus un nume gol, iar emailul să contina caracterele '@' și '.' .</li>
            <li>Stilizati aplicatia, astfel incat sa arate mai frumos.</li>
          </ul>
        </div>

      </Layout>
    </div>
  )
}

export default About
