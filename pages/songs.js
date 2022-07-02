import Image from "next/image";
import React from "react";
import Navbar from "../components/navbar";
import logo from "../img/moppersLogga.png";
import Song from "../components/song";

export default function Songs() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-md">
        <Image alt="Logo" src={logo} />
        <h1 className="text-center">OFFICIELLA SÅNGBOK</h1>
      </div>

      <Song />
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4 max-w-lg mx-auto"
      >
        <input type="checkbox" />

        <div className="collapse-title text-xl font-medium">Moppers stad</div>
        <div className="collapse-content">
          <em>Melodi: Kalmare stad</em>
          <br />
          <br />
          <p>||: Sångare: Ut i kalmare stad,</p>
          <p>Alla: ja där finns det inge Moppers, :||</p>
          <p>fören lördagen.</p>
          <p>Sångare: Hej dick</p>
          <p>Alla: Hej dack</p>
          <p>Sångare: Jag slog i</p>
          <p>Alla: och vi drack.</p>
          <p>Sångare: Hej dickom dickom dack</p>
          <p>Alla: Hej dickom dickom dack. För uti Kalmare stad ja,</p>
          <p>där finns det ingen kvast förrän lördagen.</p>
          <p>||: Sångare: Albin Gustavson vår,</p>
          <p>Alla: Satt på krogen igår, :||</p>
          <p>och var full som ett får.</p>
          <p>||: Sångare: Filip Dagarp äger jäger,</p>
          <p>Alla: putsar pengar som han väger :||</p>
          <p>och försvinner en stund.</p>
          <p>||: Sångare: Adrian Lindblad jobba bank,</p>
          <p>Alla: och tvätta pengar på Swedbank, :||</p>
          <p>ja det är så sant.</p>
          <p>||: Sångare: Malin har du en hemlighet?</p>
          <p>Alla: Jag har en fetisch för mjölkpaket, :||</p>
          <p>Men vem har inte det?</p>
          <p>||: Sångare: Ellen har jag brutit armen</p>
          <p>Alla: (Ja på norrländska), :||</p>
          <p>Jag skriver ut en centelitare</p>
          <p>||: Sångare: Alva varför är Adrian din bästa vän?</p>
          <p>Alla: Vi sitter under parasollet ikväll :||</p>
          <p>För vi blev röda igen.</p>
          <p>Sida 3</p>
          <p>||: Sångare: Ludwig han är vår vegan</p>
          <p>Och vi älskar honom ändå :||</p>
          <p>För att du är lika mycket värd</p>
          <p>||: Sångare: Räkan rökande räkor räknar</p>
          <p>En, två, tre, fyra, fem, sex, sj(ZZZzzzZZzz) :||</p>
          <p>De får nog koka upp till solen går upp</p>
          <p>||: Sångare: Var är tjejen David raggat?</p>
          <p>Alla: Hon har redan taggat :||</p>
          <p>Långt bort härifrån</p>
          <p>||: Sångare: vad ska mackan ha till mat?</p>
          <p>Alla: Det blir sallad och tomat, :||</p>
          <p>Och en klick av spenat</p>
          <p>||: Sångare: Felix äter du ost?,</p>
          <p>Alla: vad fan tror du om min kost? :||</p>
          <p>Klart som fan jag gör det</p>
          <p>||: Sångare: Simone är vår mamma,</p>
          <p>Alla: bland ett gäng av ohjälpsamma :||</p>
          <p>Men det är inte lätt att brygga kaffe</p>
        </div>
      </div>

      <div
        tabIndex="1"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4 max-w-lg mx-auto"
      >
        <input type="checkbox" />

        <div className="collapse-title text-xl font-medium">Grekland</div>
        <div className="collapse-content">
          <em>Melodi: Marche militaire</em>
          <br />
          <br />
          <p>
            Ingar&ouml; Moppers
            <br />
            ska resa till Grekland,
            <br />
            d&auml;r ska de dricka
            <br />
            dom sedan kommer bli till en synd.
            <br />
            Albin vid toan,
            <br />
            viktig &eacute;, ty han g&eacute;, fin pur&eacute;,
            <br />
            st&auml;dning och moppning f&ouml;ljer me&rsquo;,
            <br />
            men vad g&ouml;r v&auml;l de?
            <br />
            F&ouml;r vi har nu lov,
            <br />
            har nu lov,
            <br />
            har en veckas lov,
            <br />
            &auml;ven om f&ouml;ljderna blir
            <br />
            att vi f&aring;r lida pin.
            <br />
            Alla: Adrian i sikte, har du kr&auml;m?
            <br />
            Adrian: Hit med kr&auml;m! Mera kr&auml;m!
            <br />
            Alla: tror vi att han har blivit r&ouml;d?
            <br />
            Adrian: Ja! Fast v&auml;rre!
          </p>
        </div>
      </div>
      <div
        tabIndex="2"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4 max-w-lg mx-auto"
      >
        <input type="checkbox" />

        <div className="collapse-title text-xl font-medium">Mera lima</div>
        <div className="collapse-content">
          <em>Melodi: internationalen</em>
          <br />
          <br />
          <p>
            Mera lima i glaset,
            <br />
            Mera glas p&aring; v&aring;rt bord,
            <br />
            Moera bord p&aring; kalaset,
            <br />
            Mer kalas p&aring; v&aring;r jord.
            <br />
            Mera ny&aring;r med Moppers,
            <br />
            Mera Moppers i Brunn,
            <br />
            Mera brunnar av lima,
            <br />
            Mera lima av v&aring;ra cash,
            <br />
            Bev&auml;sh Bev&auml;sh!
          </p>
        </div>
      </div>
      <div
        tabIndex="3"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4 max-w-lg mx-auto"
      >
        <input type="checkbox" />

        <div className="collapse-title text-xl font-medium">
          Vem kan elda i återvall
        </div>
        <div className="collapse-content">
          <em>Melodi: Vem kan segla</em>
          <br />
          <br />
          <p>
            Vem kan t&auml;nda en eld i regn?
            <br />
            Vem kan sen frysa till fyra?
            <br />
            Vem kan &aring;ka fr&aring;n &aring;tervall, utan att f&auml;lla
            t&aring;rar?
            <br />
            Jag kan t&auml;nda en eld i regn,
            <br />
            Jag kan sen frysa till fyra,
            <br />
            Men ej &aring;ka fr&aring;n &aring;tervall, utan att f&auml;lla
            t&aring;rar
          </p>
        </div>
      </div>
      <div
        tabIndex="4"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4 max-w-lg mx-auto"
      >
        <input type="checkbox" />

        <div className="collapse-title text-xl font-medium">Sover Nazar?</div>
        <div className="collapse-content">
          <em>Melodi: broder Jacob</em>
          <br />
          <br />
          <p>
            |: Var &auml;r Nazar? :||
            <br />
            ||: Sover du? :||
            <br />
            ||: Klockan &auml;r bara tio :||
            <br />
            ||: Norrlands djup :||
          </p>
        </div>
      </div>
      <div
        tabIndex="5"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4 max-w-lg mx-auto"
      >
        <input type="checkbox" />

        <div className="collapse-title text-xl font-medium">
          Max kärlekshymn
        </div>
        <div className="collapse-content">
          <em>Melodi: Somewhere over the rainbow</em>
          <br />
          <br />
          <p>
            F&ouml;rspel: Ooooo i ackord
            <br />
            N&aring;n stans h&ouml;gt &ouml;ver molnen, sv&auml;var jag
            <br />
            Din hand smeker min bena, jag tror att jag g&aring;r av
            <br />
            &Aring;&aring;h vad v&auml;rmen fr&aring;n huden, sprider sig
            <br />
            Solstr&aring;n skimrar fr&aring;n f&ouml;nstret, att fl&aring;sa
            &auml;r underbart
            <br />
            Ditt finger r&ouml;r sig l&aring;ngsamt &ouml;ver
            <br />
            Sola plexus precis vad jag beh&ouml;ver
            <br />
            Kl&auml;m mig!
            <br />
            Men v&auml;nta lite jag st&aring;r ju hemma
            <br />
            Det verkar bara vara en till
            <br />
            Fa-nta-si
            <br />
            Varf&ouml;r &auml;r jag igen h&auml;r, (vid) spegelen
            <br />
            (En) annan dag ska jag finna, n&aring;n som kan r&ouml;ra mig
          </p>
        </div>
      </div>
      <div
        tabIndex="6"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4 max-w-lg mx-auto"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          En första kväll på Kreta
        </div>
        <div className="collapse-content">
          <em>Melodi: En kväll i Juni</em>
          <br />
          <br />
          <p>
            Ja det &auml;r en kv&auml;ll i juni,
            <br />
            Nu n&auml;r solen &auml;r som st&ouml;rst,
            <br />
            Vi har precis kommit till Kreta,
            <br />
            F&ouml;r att sl&auml;cka v&aring;rens t&ouml;rst,
            <br />
            H&auml;r runt bordet sitter Moppers,
            <br />
            Som om tiden just st&aring;r still,
            <br />
            F&ouml;r om hundratusen dagar,
            <br />
            Kanske barn finns h&auml;r omkring,
            <br />
            Jag tar p&aring; min mopperstr&ouml;ja,
            <br />
            Sparkar av mig b&aring;da skorna,
            <br />
            Och sen dunkar jag min hand och ropar:
            <br />
            &quot;&Auml;ntligen resa igen!&quot;
            <br />
            Vi har en vecka full av skoj,
            <br />
            Vad beh&ouml;vs egentligen mera?
            <br />
            F&ouml;r i slut&auml;ndan &auml;r allt som spelar roll att vi har
            varan!
            <br />
            Na na na nananana ......
          </p>
        </div>
      </div>
    </>
  );
}
