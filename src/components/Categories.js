import {Link} from 'react-router-dom'

const Categories = () => {
    return (
        <div>
            <div className="list-group">
                <Link to="#" className="list-group-item list-group-item-action active">
                    Arama Kriterine Göre Filtrele
                </Link>
                <Link to="/details/colyakOgrenciSayisi"className="list-group-item list-group-item-action">Çölyaklı Öğrenciler</Link>
                <Link to="diyabetliOgrenciSayisi" className="list-group-item list-group-item-action">Diyabetli Öğrenciler</Link>
                <Link to="/details/engelliOgrenciSayisi" className="list-group-item list-group-item-action">Engelli Öğrenciler</Link>
                <Link to="/details/engelliPersonelSayisi" className="list-group-item list-group-item-action ">Engelli Personeller</Link>
                <Link to="/details/iskurCalisanSayisi" className="list-group-item list-group-item-action ">İşkur Çalışanları</Link>
                <Link to="/details/okulAlani" className="list-group-item list-group-item-action ">Okulun Alanı</Link>
                <Link to="/details/isciSayisi" className="list-group-item list-group-item-action ">İşçi Sayıları</Link>
                <Link to="/details/idareciSayisi" className="list-group-item list-group-item-action ">İdareci Sayıları</Link>
                <Link to="/details/katSayisi" className="list-group-item list-group-item-action ">Okulun Kat Sayısı</Link>
            </div>
        </div>
    )
}

export default Categories