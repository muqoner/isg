import {useEffect} from 'react'
import {connect} from 'react-redux'
import { getSchollAction } from '../actions/schollActions'
import {useParams} from 'react-router-dom'
import {useFormik} from 'formik'

const Edit = (props) => {
    const {id} = useParams()
    useEffect(()=>{
        props.getSchollFunc(id)
        
    },[])
    const {handleSubmit, handleChange, values} = useFormik({
        initialValues :{
          okulAdi :"",
          katSayisi:"",
          okulAlani:"",
          derslikSayisi:"",
          idareciSayisi:"",
          kadroluOgretmenSayisi:"",
          sozlesmeliOgretmenSayisi:"",
          isciSayisi:"",
          iskurCalisanSayisi:"",
          engelliPersonelSayisi:"",
          kizOgrenciSayisi:"",
          erkekOgrenciSayisi:"",
          engelliOgrenciSayisi:"",
          diyabetliOgrenciSayisi:"",
          colyakOgrenciSayisi:"",
          obeziteSayisi:"",
          kaloriferci:"",
          digerHastalik:""
    
        },
        onSubmit :(values)=>{
          
          if(window.confirm("Düzenlemeyi Onaylıyor musunuz?")){
            props.editFunc(values)
            // history("/")
          }
        }
      })
    if(props.loading || props.scholl === null ){
        return(
            <div>
                <h6>Loading...</h6>
            </div>
        )
    }else{
        console.log(props.scholl)
        const {colyakOgrenciSayisi,derslikSayisi,diyabetliOgrenciSayisi,engelliOgrenciSayisi,engelliPersonelSayisi,erkekOgrenciSayisi,idareciSayisi,
            isciSayisi,iskurCalisanSayisi,kadroluOgretmenSayisi,kaloriferci,digerHastalik,katSayisi,kizOgrenciSayisi,obeziteSayisi,okulAdi,okulAlani,sozlesmeliOgretmenSayisi
        } =props.scholl
        return (
            <div className='container mt-2'>
        <form onSubmit={handleSubmit} >
            <div class="form-group row">
    <label  class="col-sm-3 col-form-label">Okulun Adı</label>
    <div class="col-sm-9">
      <input name="okulAdi" onChange={handleChange} placeholder={`${okulAdi}`}   class="form-control" />
    </div>
  </div>
  <div class="form-group row">
    <label  class="col-sm-3 col-form-label">Zemin Dahil Okulun Kat Sayısı</label>
    <div class="col-sm-9">
      <input  name="katSayisi" onChange={handleChange} placeholder={`${katSayisi}`}  class="form-control" id="inputPassword3"/>
    </div>
    </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Okulun Toplam Kapalı Alanı(m2)</label>
    <div class="col-sm-9">
      <input name="okulAlani" placeholder={`${okulAlani}`}  onChange={handleChange} class="form-control" />
    </div>
    </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Okulun Derslik Sayısı</label>
    <div class="col-sm-9">
      <input name="derslikSayisi" onChange={handleChange} placeholder={`${derslikSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Okulun İdareci Sayısı</label>
    <div class="col-sm-9">
      <input name="idareciSayisi" onChange={handleChange} placeholder={`${idareciSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Kadrolu Öğretmen Sayısı</label>
    <div class="col-sm-9">
      <input name="kadroluOgretmenSayisi" onChange={handleChange} placeholder={`${kadroluOgretmenSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Sözleşmeli Öğretmen Sayısı</label>
    <div class="col-sm-9">
      <input name="sozlesmeliOgretmenSayisi" onChange={handleChange} placeholder={`${sozlesmeliOgretmenSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">İşçi ve Geçici İşçi Sayısı</label>
    <div class="col-sm-9">
      <input name="isciSayisi" onChange={handleChange} placeholder={`${isciSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">TYP(İŞ_KUR) Çalışan Sayısı</label>
    <div class="col-sm-9">
      <input name="iskurCalisanSayisi" onChange={handleChange} placeholder={`${iskurCalisanSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Engelli Personel Sayısı  %40 ve Üzeri</label>
    <div class="col-sm-9">
      <input name="engelliPersonelSayisi" onChange={handleChange} placeholder={`${engelliPersonelSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Toplam Kız Öğrenci Sayısı</label>
    <div class="col-sm-9">
      <input name="kizOgrenciSayisi" onChange={handleChange} placeholder={`${kizOgrenciSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Toplam Erkek Öğrenci Sayısı</label>
    <div class="col-sm-9">
      <input name="erkekOgrenciSayisi" onChange={handleChange} placeholder={`${erkekOgrenciSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Engelli Öğrenci Sayısı %40 ve Üzeri</label>
    <div class="col-sm-9">
      <input name="engelliOgrenciSayisi" onChange={handleChange} placeholder={`${engelliOgrenciSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Kronik (Diyabet) Hastalığı Olan Öğrenci Sayısı</label>
    <div class="col-sm-9">
      <input name="diyabetliOgrenciSayisi" onChange={handleChange} placeholder={`${diyabetliOgrenciSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Kronik (Çölyak) Hastalığı Olan Öğrenci Sayısı</label>
    <div class="col-sm-9">
      <input name="colyakOgrenciSayisi" onChange={handleChange} placeholder={`${colyakOgrenciSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Kronik (Obezite) Hastalığı Olan Öğrenci Sayısı</label>
    <div class="col-sm-9">
      <input name="obeziteSayisi" onChange={handleChange} placeholder={`${obeziteSayisi}`}  class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Kronik (Diğer Kalp-Tansiyon vb.) Hastalığı Olan Öğrenci Sayısı</label>
    <div class="col-sm-9">
      <input name="digerHastalik" onChange={handleChange} placeholder={`${digerHastalik}`}  class="form-control" />
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Kaloriferci Personeli Var mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kaloriferci" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kaloriferci" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Checkbox</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1" />
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Düzenle</button>
    </div>
  </div>
  
</form>
    </div>
          )
    }
  
}

const mapStateToProps = ({loading,scholl})=>{
    return{
        loading,
        scholl
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        getSchollFunc: (id)=>dispatch(getSchollAction(id)),
        editFunc:(id)=>dispatch()
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit)