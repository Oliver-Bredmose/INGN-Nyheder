import style from "./Footer.module.scss"


function Footer() {
  return (
    <footer>
        <div className={style.Footer}>

      <div className="Section1">
        <p>Adresse:</p>
        <p>Intet nyt - Godt nyt ApS</p>
        <p>Tulipanvej 232</p>
        <p>7320</p>
        <p>Valby Øster</p>
      </div>

      <div>
        <p>Links</p>
        <p><a href="mailto:vikanweb.dk">vikanweb.dk</a></p>
        <p><a href="mailto:overpådenandenside.dk">overpådenandenside.dk</a></p>
        <p><a href="mailto:retsinformation.dk">retsinformation.dk</a></p>
        <p><a href="mailto:nogetmednews.dk">nogetmednews.dk</a></p>
      </div>

      <div>
        <p>Politik</p>
        <p>Privatlivspolitik</p>
        <p>Cookiepolitik</p>
        <p>Købsinformation</p>
        <p>Delingspolitik</p>
      </div>

      <div>
        <p>Kontakt</p>
        <p><a href="mailto:ingen@nyhed.dk"></a></p>
        <p>Telefon: <a href="tel:+23232323">+23232323</a></p>
        <p>fax: <a href="tel:123123-333">123123-333</a></p>
      </div>
        </div>
    </footer>
  )
}

export default Footer