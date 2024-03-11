import React from 'react' 
import {useFormik} from 'formik'
import {connect} from 'react-redux'
import { addSchollAction } from '../actions/schollActions'
import {useNavigate} from 'react-router-dom'

const Data = (props) => {
  const history = useNavigate()
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues :{
      okulYapimYili:"",
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
      digerHastalik:"",
      ateslemeBelgesi:"",
      isVerenVekiliVarmi:"",
      isVerenBilsisi:"",  // ad Soyad
      isVerenVekiliTc :"",
      isVerenVekiliUnvan:"",
      isVerenVekiliTel:"",
      isgDosyasiVarmi:"",
      riskDeğerlendirmeEkibiVarmi: "",
      riskDeğerlendirmeYapiliyorMu:"",
      adepVeTahliyePlaniHazirMi:"",  //acil durum eylem planı ve Tahliye Planı hazırlanmış mı
      tadbikatYapiliyorMu:"",
      ilkYardimDolabiVarMi:"",  //güncel ilk yardım dolabı var mı?
      okulTuvaletDurumu:"",  // okulun tuvaletleri uygun ve yeterli öi (20 öğrenciye 1 wc düşecek)
      engelliTuvaletiVarMi:"", //  
      karEngelleyiciVarMi:"",  // Çatıda
      uyarıLevhalarıVarMi:"",  
      siginakVarMi:"",
      duvaraSabitMi:"",
      kameraVarMi:"",
      kameraSistemiYeterliMi:"",
      icKameraSayisi:"",
      disKameraSayisi:"",
      paratonerVarMi:"",
      insanAsansoruVarMi:"",
      yukAsansoruVarMi:"",
      maviYesilEtiketVarMi:"",
      engelliRampasiVarMi:"",
      kaydirmazBantVarMi:"",
      babaVarMi:"",
      isinmaSekli:"",    //checkBox Soba katı yakıt, dogal gaz
      bacaTemizligiVarMi:"",
      ihataDuvariVarMi:"",
      trafoBinasiVarMi:"",
      elektrikDiregiVarMi:"",
      jeneratorVarMi:"",
      yalitkanPaspasVarMi:"",
      yanginMerdiveniVarMi:"",
      uyariAlarmiVarMi:"",
      yanginUyariAlarmiVarMi:"",
      dumanDedektoruVarMi:"",
      dumanDedekytoruCalisiyorMu:"",
      yanginSondurmeTupuVarMi:"",
      yanginSondurmeTupuSayisi:"",
      yanginSondurmeTupuGuncelMi:"",
      yanginSondurmeTupuBakimi:"",
      yanginDolabiVarMi:"",
      tazikliSuİleDoluMu:"",
      suDeposuVarMi:"",
      suDeposuTuru:"",   // plastik,celik
      suDeposuBakimi:"",
      icmeSuyuAnalizi:"",
      sondajKulanimiVarMi:"",
      kantinVarMi:"",
      kantincilerinHijyenBelgesiVarMi:"",
      kantincilerinSaglikRaporlariVarMi:"",
      kantinSayaclariAyriMi:"",
      acikSporSahasiVarMi:"",
      kapaliSporSalonuVarMİ:"",
      tasimaliOgrenciSayisi:"",
      tasimaliAracSayisi:"",
      ozelServisleTasinanOgrenciSayisi:"",
      ozelServisSayisi:"",


    },
    onSubmit :(values)=>{
      
      if(window.confirm("Bilgileriniz Başarıyla Kaydedildi")){
        props.addFunc(values)
        history("/")
      }
    }
  })

  return (
    <div className='container mt-2'>
        <form onSubmit={handleSubmit} >
            <div class="form-group row">
    <label  class="col-sm-3 col-form-label">Okulun Adı</label>
    <div class="col-sm-9">
      <input name="okulAdi" onChange={handleChange}   class="form-control" />
    </div>
  </div>
            <div class="form-group row">
    <label  class="col-sm-3 col-form-label">Okulun Yapım Yılı</label>
    <div class="col-sm-9">
      <input name="okulYapimYili" onChange={handleChange}   class="form-control" />
    </div>
  </div>
  <div class="form-group row">
    <label  class="col-sm-3 col-form-label">Zemin Dahil Okulun Kat Sayısı</label>
    <div class="col-sm-9">
      <input  name="katSayisi" onChange={handleChange} class="form-control" id="inputPassword3"/>
    </div>
    </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Okulun Toplam Kapalı Alanı(m2)</label>
    <div class="col-sm-9">
      <input name="okulAlani" onChange={handleChange} class="form-control" />
    </div>
    </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Okulun Derslik Sayısı</label>
    <div class="col-sm-9">
      <input name="derslikSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Okulun İdareci Sayısı</label>
    <div class="col-sm-9">
      <input name="idareciSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Kadrolu Öğretmen Sayısı</label>
    <div class="col-sm-9">
      <input name="kadroluOgretmenSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Sözleşmeli Öğretmen Sayısı</label>
    <div class="col-sm-9">
      <input name="sozlesmeliOgretmenSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">İşçi ve Geçici İşçi Sayısı</label>
    <div class="col-sm-9">
      <input name="isciSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">TYP(İŞ_KUR) Çalışan Sayısı</label>
    <div class="col-sm-9">
      <input name="iskurCalisanSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Engelli Personel Sayısı  %40 ve Üzeri</label>
    <div class="col-sm-9">
      <input name="engelliPersonelSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Toplam Kız Öğrenci Sayısı</label>
    <div class="col-sm-9">
      <input name="kizOgrenciSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Toplam Erkek Öğrenci Sayısı</label>
    <div class="col-sm-9">
      <input name="erkekOgrenciSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Engelli Öğrenci Sayısı %40 ve Üzeri</label>
    <div class="col-sm-9">
      <input name="engelliOgrenciSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Kronik (Diyabet) Hastalığı Olan Öğrenci Sayısı</label>
    <div class="col-sm-9">
      <input name="diyabetliOgrenciSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Kronik (Çölyak) Hastalığı Olan Öğrenci Sayısı</label>
    <div class="col-sm-9">
      <input name="colyakOgrenciSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Kronik (Obezite) Hastalığı Olan Öğrenci Sayısı</label>
    <div class="col-sm-9">
      <input name="obeziteSayisi" onChange={handleChange} class="form-control" />
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-3 col-form-label">Kronik (Diğer Kalp-Tansiyon vb.) Hastalığı Olan Öğrenci Sayısı</label>
    <div class="col-sm-9">
      <input name="digerHastalik" onChange={handleChange} class="form-control" />
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
  ///////////
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Kaloriferci Personelin Ateşleme Belgesi Var mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="ateslemeBelgesi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="ateslemeBelgesi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0"> Okulun İşveren Vekili Belirlenmiş Mi? ( İSG'den Sorumlu Müdür Baş Yrd. Veya Müdür Yrd. Olacak) </legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isVerenVekiliVarmi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isVerenVekiliVarmi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun İşveren Vekilinin Adı-Soyadı</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isVerenBilsisi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isVerenBilsisi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">İşveren Vekilinin Ünvanı</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isVerenVekiliUnvan" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isVerenVekiliUnvan" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">İşveren Vekilinini T.C. Kimlik Numarası</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isVerenVekiliTc" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isVerenVekiliTc" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">İşveren Vekilinin Telefon Numarası</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isVerenVekiliTel" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isVerenVekiliTel" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun İş Sağlığı ve Güvenliği Dosyası Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isgDosyasiVarmi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isgDosyasiVarmi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Risk Değerlendirme Ekibi Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="riskDeğerlendirmeEkibiVarmi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="riskDeğerlendirmeEkibiVarmi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Acil Durum Eylem Planı ve Tahliye Planı Hazırlanmış Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="adepVeTahliyePlaniHazirMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="adepVeTahliyePlaniHazirMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Tadbikatlar Yapılıyor Mu?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="tadbikatYapiliyorMu" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="tadbikatYapiliyorMu" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">MEBBİS Üzerinden Güncel Risk Değerlendirmesi Yapılıyor Mu?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="riskDeğerlendirmeYapiliyorMu" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="riskDeğerlendirmeYapiliyorMu" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Güncel İlkyardım Dolabı Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="ilkYardimDolabiVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="ilkYardimDolabiVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Engelli WC Var Mi?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="engelliTuvaletiVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="engelliTuvaletiVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Çatısında Kar Engelleyici Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="karEngelleyiciVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="karEngelleyiciVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Çatı Altlarında Cisim Düşmelerine Kariı Uyarı Levhaları Asılmış Mı ?(Kar,Buz,vs..)</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="uyarıLevhalarıVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="uyarıLevhalarıVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">OkulunuzdaSığınak Var Mi?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="siginakVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="siginakVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzun Birimlerinde(Sınıf, Büro, Pansiyon vb.) Dolaplar, Panolar vb. Duvara Sabitlenmiş Mi? </legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="duvaraSabitMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="duvaraSabitMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Kamera Sistemi Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kameraVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kameraVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzun Kamera Sistemi Varsa Yeterli mi?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kameraSistemiYeterliMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kameraSistemiYeterliMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Kamera Sistemine Bağlı Olan İç Kamera Sayısı</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="icKameraSayisi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="icKameraSayisi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Kamera Sistemine Bağlı Olan Dış Kamera Sayısı</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="disKameraSayisi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="disKameraSayisi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Paratoner Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="paratonerVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="paratonerVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Kamera Sistemine Bağlı Olan Dış Kamera Sayısı</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="disKameraSayisi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="disKameraSayisi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda İnsan Asansörü Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="insanAsansoruVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="insanAsansoruVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Bulunan Asansör Çalışır Durumda Mı? </legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yukAsansoruVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yukAsansoruVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Yük-Yemek Asansörü Var Mı? </legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yukAsansoruVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yukAsansoruVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Asansörlerin Mavi-Yeşil Güvenlik Etiketi Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="maviYesilEtiketVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="maviYesilEtiketVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Engelli Rampası Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="engelliRampasiVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="engelliRampasiVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okul Nerdivenlerinde Kaydırmaz Bant Var mI?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kaydirmazBantVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kaydirmazBantVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okul Merdiven Korkuluklarında Kaymayı Önleyici Merdiven Babaları Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="babaVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="babaVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Isınma Şekli Nedir?(Katı Yakıtlı,Doğalgazlı,Soba)</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isinmaSekli" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            Soba
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isinmaSekli" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            Katı Yakıt
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="isinmaSekli" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            Doğalgaz
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Baca Temizliği (Yılda Bir) Yapılıyor Mu?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="bacaTemizligiVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="bacaTemizligiVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okul Çevre (İhata) Duvarı Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="ihataDuvariVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="ihataDuvariVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Bahçesinde Trafo Binası Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="trafoBinasiVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="trafoBinasiVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Bahçesinde Elektrik Direği Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="elektrikDiregiVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="elektrikDiregiVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Jeneratörü Var mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="jeneratorVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="jeneratorVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Ana Elektrik Panolarının Önüne Elektrik Çarpmasını Önlemek Amacıyla Yalıtkan Paspas Konulmuş Mu?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yalitkanPaspasVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yalitkanPaspasVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulda Yangın Merdiveni Var mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginMerdiveniVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginMerdiveniVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Yangım Uyarı Alarm Sistemi Var mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="uyariAlarmiVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="uyariAlarmiVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Yangın Alarm Sistemi Çalışıyor Mu?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginUyariAlarmiCalisiyormu" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginUyariAlarmiCalisiyormu" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Yangın Algılama Duman Dedektörü Sistemi Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="dumanDedektoruVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="dumanDedektoruVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Yangın Algılama Duman Dedektörü Sistemi Çalışıyor Mu?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="dumanDedekytoruCalisiyorMu" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="dumanDedekytoruCalisiyorMu" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Yangın Söndürme Tüpleri Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginSondurmeTupuVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginSondurmeTupuVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Yangın Söndürme Tüplerinin Sayısı</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginSondurmeTupuSayisi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginSondurmeTupuSayisi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulun Yangın Söndürme Tüpleri Güncel Mi?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginSondurmeTupuGuncelMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginSondurmeTupuGuncelMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Yangın Söndürme Tüplerinin Yılda Bir Bakımı 4. Yılın Sonunda Dolumu Yapılıyor Mu?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginSondurmeTupuBakimi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginSondurmeTupuBakimi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Yangın Dolabı (Sulu Sistem) Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginDolabiVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="yanginDolabiVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Yangın Dolapları Güncel ve Tazyikli Su İle Dolu Mu?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="tazikliSuİleDoluMu" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="tazikliSuİleDoluMu" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Su Deposu Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="suDeposuVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="suDeposuVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Su Deposu Plastik Mi Çelik Mi?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="suDeposuTuru" id="gridRadios1" value="plastik" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="suDeposuTuru" id="gridRadios2" value="celik" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Su Deposunun Yıllık Temizlik ve Bakımları Yapılıyor Mu ? (Sertifikalı Firma Tarafından)</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="suDeposuBakimi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="suDeposuBakimi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">İçme Suyu Analizleri Yaptırılmış Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="icmeSuyuAnalizi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="icmeSuyuAnalizi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Kuyu Suyu Sondaj Kullanımı Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="sondajKulanimiVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="sondajKulanimiVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okulunuzda Kantin Var Mi?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kantinVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kantinVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Kantin Çalışanlarının Tamamının Hijyen Belgeleri Var mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kantincilerinHijyenBelgesiVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kantincilerinHijyenBelgesiVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Kantin Çalışanlarının Tamamının Yıllık Sağlık Raporları Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kantincilerinSaglikRaporlariVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kantincilerinSaglikRaporlariVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Kantin Bölümünün Elektrik-Su Sayaçları Ayrılmış Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kantinSayaclariAyriMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kantinSayaclariAyriMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okul Bahçesinde Açık Spor Sahası Var Mı ?(Halı saha-Basket vs.)</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="acikSporSahasiVarMi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="acikSporSahasiVarMi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Okul Binasından Bağımsız Kapalı Spor Salonu Var Mı?</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kapaliSporSalonuVarMİ" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="kapaliSporSalonuVarMİ" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Taşımalı Öğrenci Sayısı</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="tasimaliOgrenciSayisi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="tasimaliOgrenciSayisi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Taşımalı Araç Sayısı</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="tasimaliAracSayisi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="tasimaliAracSayisi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Özel Servisle Taşınan Öğrenci Sayısı</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="ozelServisleTasinanOgrenciSayisi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="ozelServisleTasinanOgrenciSayisi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-3 pt-0">Özel Servis Araç Sayısı</legend>
      <div class="col-sm-9">
        <div class="form-check">
          <input  onChange={handleChange} class="form-check-input" type="radio" name="ozelServisSayisi" id="gridRadios1" value="evet" />
          <label class="form-check-label mr-4" for="gridRadios2">
            evet
          </label > 
          <input  onChange={handleChange} class="form-check-input" type="radio" name="ozelServisSayisi" id="gridRadios2" value="hayır" />
          <label class="form-check-label" for="gridRadios1">
            hayır
          </label>
        </div>
        
        
      </div>
    </div>
  </fieldset>

  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Kaydet</button>
    </div>
  </div>
  
</form>
    </div>
  )
}



const mapStateToProps =state=>{
  return{

  }
}

const mapDispatchToProps = dispatch=>{
  return{
    addFunc: (scholl)=>dispatch(addSchollAction(scholl))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Data)