var ee=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);import{l as A,S as ie,F as te,T as E,e as ae,C as se,$ as oe}from"./vendor.f52adb16.js";var re=ee((pe,I)=>{const le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const p of l)if(p.type==="childList")for(const o of p.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function d(l){const p={};return l.integrity&&(p.integrity=l.integrity),l.referrerpolicy&&(p.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?p.credentials="include":l.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function n(l){if(l.ep)return;l.ep=!0;const p=d(l);fetch(l.href,p)}};le();function F(r,{$:t,$on:d,$f7:n,$update:l,$h:p,$f7router:o,$onUnmounted:a,$f7ready:e}){let i=[],s=[],c=[],w=!1,v=r.list_config,u={published:"0"},g=!0,b=!0,_=30;const P={slidesPerView:"auto",spaceBetween:15,grabCursor:!0,mousewheel:!0},T={slidesPerView:"auto",spaceBetween:10,freeMode:!0,grabCursor:!0,mousewheel:!0},B=()=>{v.page=0,o.navigate(o.currentRoute.url,{reloadCurrent:!0,ignoreCache:!0,props:{list_config:v}})},k=()=>{n.request.json("https://flekstore.com/rest/apps/getWarning").then(function(y){u=y.data.data,l()})},f=()=>{n.request.json("https://flekstore.com/rest/device/getDevice",{id:localStorage.device_id}).then(function(y){w=JSON.parse(y.data.data),l(),w.banned=="1"&&n.loginScreen.open(".banned-screen")})},m=()=>{n.request.json("https://flekstore.com/rest/news/getArticlesPreview/").then(function(y){i=y.data,l(function(){n.swiper.create(".swiper-container.news",P)})})},h=()=>{n.request.json("https://flekstore.com/rest/categories/getCategories/").then(function(y){s=y.data,l(function(){n.swiper.create(".swiper-container.categories",T)})})},$=()=>{v.page||(c=[],b=!0,l()),!!g&&(!b||(g=!1,n.request.json("https://flekstore.com/rest/apps/getApps/",v).then(function(y){v.page++,c=c.concat(y.data),c.length<_*v.page&&(b=!1,l(function(){n.lazy.create(".apps-list")})),g=!0,l(function(){n.lazy.create(".apps-list")})})))},S=y=>{v.filter=y,v.page=0,v.search=!1,$()},q=()=>{v.page=0,v.search=!1,t("#apps-search-input").val(""),$()};return d("pageInit",()=>{t(".page-content").scroll(function(){var y=210;t(this).scrollTop()>=y?t(".toolbar-sticky").css("position","sticky"):t(".toolbar-sticky").css("position","inherit")}),t("#apps-search-form").on("keyup",function(y){t("#apps-search-input").val()!==""?(v.page=0,v.filter="updates",l(),v.search=t("#apps-search-input").val(),$()):(v.page=0,v.search=!1,t("#apps-search-input").val(""),$())}),t("#apps-search-form").submit(function(y){y.preventDefault(),v.page=0,v.filter="updates",l(),v.search=t("#apps-search-input").val(),$()})}),e(()=>{m(),h(),$(),k(),localStorage.device_id&&f()}),function(y){y.$;var C=y.$h;return y.$root,y.$f7,y.$f7route,y.$f7router,y.$theme,y.$update,y.$store,C`
  <div class="page no-navbar" data-name="apps">
    <!-- Top Navbar -->
    <div class="navbar no-hairline navbar-current">
      <div class="navbar-bg" style="background:var(--f7-page-bg-color)"></div>
      <div class="navbar-inner">
      </div>
    </div>

    <!-- Scrollable page content-->
    <div class="page-content app-content-page infinite-scroll-content ptr-content" data-sticky-container @infinite=${$} @ptr:refresh=${B}>
      <div class="ptr-preloader">
        <div class="preloader"></div>
        <div class="ptr-arrow"></div>
      </div>
      <div class="content-medium-width">
  	    <!-- Slider main container -->
  			<div class="swiper-container news">
  			    <div class="swiper-wrapper">
              ${!i.length&&C`
                ${Array(3).fill().map(D=>C`
                <a href="" class="link swiper-slide margin-right">
                  <div class="skeleton-block skeleton-effect-wave" style="width:300px;height:180px; border-radius:15px"></div>
                  <backout></backout>
                  <div class="title skeleton-text skeleton-effect-wave">
                    ------------------ ----  ---------- ---- -
                  </div>
                </a>
                `)}
              `}
              <!-- <a href="https://twitter.com/flekstore_com/status/1483764878745743361?s=20" class="link swiper-slide external" target="_blank">
                <img src="https://i.imgur.com/q7UzIbo.jpg" width="300.000000pt" height="180.000000pt"/>
                <backout></backout>
                <div class="title text-color-white">
                  Vote for your favorite apps on our Twitter
                </div>
              </a>               -->
              ${i.map(D=>C`
  			        <a href="/article/${D.id}/" class="link swiper-slide">
  				        <img src="${D.image}" width="300.000000pt" height="180.000000pt"/>
  				        <backout></backout>
  				        <div class="title text-color-white">
  					        ${D.title}
  				        </div>
  			        </a>
              `)}
  			    </div>
  			</div>
        
        
          <div class="toolbar-sticky" style="${v.search!==!1?"height:55px":""}">
            <form class="list inset" id="apps-search-form">
              <ul>
                <li class="item-content">
                  <div class="item-inner">
                    <div class="item-input-wrap">
                      <input type="text" placeholder="Search by app name" id="apps-search-input" required=""/>
                    </div>
                  </div>
                  <div class="item-inner" style="width: auto;">
                    ${v.search!==!1&&C`
                    <a class="link" @click=${()=>q()}><i class="icon f7-icons">xmark</i></a>
                    `}
                  </div>
                </li>
              </ul>
            </form>
            
            ${s.length?C`
            <div class="swiper-container categories ${v.search!==!1?"display-none":""}">
              <div class="swiper-wrapper">
                <div class="swiper-slide item-link ${v.filter==="updates"&&"active"}" @click=${()=>S("updates")}>Updates</div>
                <div class="swiper-slide item-link ${v.filter==="all"&&"active"}" @click=${()=>S("all")}>All</div>
                ${s.map(D=>C`
                <div class="swiper-slide item-link ${v.filter===D.id&&"active"}" @click=${()=>S(D.id)}>${D.name}</div>
                `)}
              </div>
            </div>
            `:C`
            <div class="swiper-container categories">
              <div class="swiper-wrapper">
                ${Array(8).fill().map(D=>C`
                  <div class="swiper-slide item-link skeleton-text skeleton-effect-fade" style="width:60px;height:18px;margin-right:10px;"></div>
                `)}
              </div>
            </div>
            `}
          </div>
          
        ${u.published==="1"&&C`
        <div class="block block-strong block-warning margin inset">
          ${u.message}
        </div>
        `}
        
        <div class="list media-list inset no-hairlines-between apps-list">
          <ul class="row">
            ${c.map(D=>C`
            <li class="col-100 medium-50">
              <a href="/app_view/${D.id}/" class="item-link item-content">
                <div class="item-media">
                  <img data-src="${D.icon}" class="lazy"/>
                </div>
                <div class="item-inner">
                  <div class="item-title-row">
                    <div class="item-title">${D.name}</div>
                  </div>
                  <div class="item-subtitle">v ${D.version}</div>
                  <div class="item-footer">${D.short_description}</div>
                </div>
              </a>
            </li>
            `)}
          </ul>
        </div>
        ${!b&&!c.length&&C`
        <center class="md margin-top">
          Nothing found
          <br/><br/>
          <a class="link button button-lite button-round button-link" style="width: fit-content;text-transform: inherit;" @click=${()=>q()}>
            <i class="icon f7-icons">arrow_left_circle_fill</i> Return to catalog
          </a>
        </center>
        `}
        ${b&&C`
        <div class="infinite-scroll-preloader">
          <center class="md margin-top">
            <div class="preloader">
              <span class="preloader-inner">
                <svg viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16"></circle>
                </svg>
              </span>
            </div>
          </center>
        </div>
        `}
      </div>

    </div>
  </div>
`}}F.id="5ef6b543b6";function x(r,{$:t,$on:d,$f7:n,$update:l,$h:p,$f7ready:o}){let a;const e=()=>{a||(a=n.toast.create({text:`
        1) Tap <b>Allow</b> button <br/>
        2) Open the <b>Settings app</b> <br/>
        3) Tap <b>Profile Downloaded</b> <br/>
        4) Tap <b>Install</b> and follow the instructions <br/>
        <br/><br/>
        After installation, you can return to the FlekSt0re app and pull to refresh device page.
        `,position:"top",horizontalPosition:"center",closeButton:!0,closeButtonText:"Close",closeButtonColor:"red",on:{close:function(){r.router.refreshPage()}}})),a.open(),window.open("https://flekstore.com/rest/device/getUdid/"+localStorage.client_uid+"?deal_id="+localStorage.deal_id,"_self"),window.tryGetDevice=!0},i=()=>{n.request.json("https://flekstore.com/rest/device/findDeviceByFp",{fp_id:localStorage.client_uid}).then(function(c){c.data.status==="ok"&&(localStorage.device_id=c.data.data,window.tryGetDevice=!1,r.router.refreshPage())})},s=()=>{n.request.json("https://flekstore.com/rest/device/findDeviceByUdid",{udid:t("#udid-add-input").val()}).then(function(c){c.data.status==="ok"&&(localStorage.device_id=c.data.data,window.tryGetDevice=!1,r.router.refreshPage())})};return o(()=>{window.addEventListener("focus",function(){!localStorage.device_id&&window.tryGetDevice&&i()}),localStorage.device_id||i(),l()}),function(c){c.$;var w=c.$h;return c.$root,c.$f7,c.$f7route,c.$f7router,c.$theme,c.$update,c.$store,w`
  <div class="device-add">
    
    ${localStorage.dev_mode?w`
      <div class="list inset" id="udid-add-form" style="margin-top:15vh">
        <ul>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-input-wrap">
                <input type="text" placeholder="Paste UDID" id="udid-add-input" required=""/>
              </div>
            </div>
            <div class="item-inner" style="width: auto;">
              <label class="link" @click=${()=>s()}><i class="icon f7-icons">arrow_right_circle_fill</i></label>
            </div>
          </li>
        </ul>
      </div>
    `:w`
      <div class="block" style="margin-top:10vh">
        <center>
          <p style="font-size:16px;">To get started with the FlekSt0re app you need to add your device.</p>
        </center>
        <!-- <a class="button button-large button-fill" @click=${()=>e()}>
          Add device
        </a> -->
        <a class="button button-large button-fill" @click=${()=>e()}>
          Add device
        </a>
      </div>
    `}
    
    <div class="block">
      <a href="https://youtu.be/G5h5IBuIuv8" class="button button-large button-outline external" target="_blank">
        <i class="icon f7-icons">play_rectangle_fill</i> Watch tutorial
      </a>
    </div>
    
    <div class="list accordion-list inset no-margin-bottom">
      <ul>
        <li class="accordion-item">
          <a href="#" class="item-content item-link">
            <div class="item-inner">
              <div class="item-title">What data will we receive?</div>
            </div>
          </a>
          <div class="accordion-item-content" style="" aria-hidden="true">
            <div class="block">
              <p>
                When adding a device, we will receive your device UDID, device type and model number.
                <br/><br/>
                UDID is an abbreviation for unique device identifier. Every Apple mobile device has it.
                <br/><br/>
                You need to provide us with the UDID of your device so that we can sign apps for this device.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="block text-color-gray">
      <center>By adding a device, you agree to the processing of data about your device.</center>
    </div>
  </div>
`}}x.id="87c89785ab";function U(r,{$:t,$on:d,$f7:n,$update:l,$h:p,$f7ready:o,$f7router:a}){let e=!1,i=!1;const s=n.toast.create({text:"UDID copied",position:"top",horizontalPosition:"center",closeTimeout:1500,closeButton:!0}),c=()=>{r.router.navigate("/purchase/",{props:{amount:e.amount}})},w=()=>{n.dialog.prompt("Enter gift code",function(b){n.dialog.preloader("Code activation"),n.request.json("https://flekstore.com/rest/device/useGift/",{device_id:localStorage.device_id,code:b}).then(function(_){n.dialog.close(),_.data.status==="ok"?r.router.refreshPage():n.dialog.alert(_.data.message,"Error")})})},v=()=>{n.request.json("https://flekstore.com/rest/device/getTariff/",{id:localStorage.device_id}).then(function(b){e=JSON.parse(b.data.data),l()})},u=()=>{n.request.json("https://flekstore.com/rest/device/restoreForFree/",{id:localStorage.device_id}).then(function(b){n.dialog.alert(b.data.message,function(){r.router.refreshPage()})})},g=()=>{n.request.json("https://flekstore.com/rest/device/getLastPayment/",{id:localStorage.device_id}).then(function(b){i=JSON.parse(b.data.data),l()})};return o(()=>{localStorage.device_id!==void 0&&(v(),g()),new ClipboardJS(".copy-udid").on("success",function(_){s.open()})}),function(b){b.$;var _=b.$h;return b.$root,b.$f7,b.$f7route,b.$f7router,b.$theme,b.$update,b.$store,_`

<div>
  ${e&&_`
    ${e.tariff!==1&&e.tariff!==3?_`
    <div class="block block-strong block-warning margin inset">
      <center>
        Unfortunately, Apple has revoked the certificate ahead of schedule.
        <br/>
        <a href="/faq/" class="link button-link color-blue">
          <i class="icon f7-icons">question_diamond_fill</i> Technical support
        </a>
      </center>
    </div>
    `:""}
    ${e.tariff==3?_`
    <div class="block block-strong block-warning margin inset">
      <center>
        Subscription expired.
      </center>
    </div>
    `:""}
    ${e.tariff!==4?_`
      <div class="block block-pricing inset">
        <div class="list pricing-header no-hairlines">
          <ul>
            <li class="item-content">
              <div class="item-media">
                <img src="https://flekstore.com/client/img/device/Crown.png" class="pricing-icon"/>
              </div>
              <div class="item-inner" style="margin: 0">
                <div class="item-title" style="white-space: unset;">
                  <div class="title">Premium access</div>
                  <div class="item-subtitle">
                    ${e.amount===e.default_amount?_`
                      <div class="chip color-purple">
                        <div class="chip-label">
                          <span class="price-text">${e.amount}</span> per year
                        </div>
                      </div>
                    `:_`
                      <div class="chip color-gray margin-right-half">
                        <div class="chip-label"><s class="">${e.default_amount}</s></div>
                      </div>
                      <div class="chip color-orange">
                        <div class="chip-label"><span class="price-text">${e.amount}</span> per year</div>
                      </div>
                    `}
                  </div>
                  <div class="item-footer">one-time payment</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <center>
          <div class="tariff-description">
            Access to installation of all apps from the FlekStore and their use up to 1 year
          </div>
          <i class="icon f7-icons if-not-md normal">plus</i>
        </center>
        <div class="list inset dev-cert">
          <ul style="background: var(--purple-lite-bg-color);">
            <li>
              <a href="/article/1/" class="item-link item-content">
                <div class="item-media">
                  <img src="https://flekstore.com/client/img/CertificateImage.png" width="60px"/>
              </div>
                <div class="item-inner">
                  <div>
                    Application signature certificate
                    <div class="item-footer">download</div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div style="display:grid;">
          <a @click=${c} class="button button-large button-fill">Activate</a>
        </div>
      </div>
    `:_`
      <div class="block block-pricing inset">
        <div class="list recovery-header no-hairlines">
          <ul>
            <li class="item-content">
              <div class="item-media">
                <img src="https://flekstore.com/client/img/device/speed.png"/>
              </div>
              <div class="item-inner">
                <div class="item-title" style="white-space: unset;">
                  <div class="title">Express recovery</div>
                  <div class="item-header">
                    Accelerated recovery of premium access. Instantly or within
                    ${" "+e.time} hours (if there are not enough certificates).
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div style="display:grid;">
          <a href="/purchase/" class="button button-large button-fill">Restore for ${e.amount}</a>
        </div>
      </div>
      ${i&&(i.method!=="admin"&&i.method!=="free"||i.method==="gift")?_`
      <div class="block block-pricing block-free-recovery inset">
        <div class="list recovery-header no-hairlines">
          <ul>
            <li class="item-content">
              <div class="item-media">
                <img src="https://flekstore.com/client/img/device/connection-sync.png"/>
              </div>
              <div class="item-inner">
                <div class="item-title" style="white-space: unset;">
                  <div class="title">Standard recovery</div>
                  <div class="item-footer">
                    Free restore of premium access within
                    <br/>
                    <b style="color: var(--f7-theme-color)">3-14 DAYS.</b>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div style="display:grid;">
          <a class="button button-large button-outline" @click=${()=>u()}>Restore</a>
        </div>
      </div>
      `:_`
        <center>
          <a href="/faq_view/17/" class="link button-link color-blue">
            Why do I have to pay again?
          </a>
        </center>
      `}
    `}
  `}
  
  <div class="block">
    <a class="button button-large button-fill button-lite" @click=${()=>w()}>
      <i class="icon f7-icons">gift</i> Enter gift code
    </a>
    <a class="button button-large button-fill button-lite copy-udid" data-clipboard-text="${r.device.udid}">
      <i class="icon f7-icons">square_on_square</i> Copy UDID
    </a>
    <center>
      <a href="/faq/" class="link button-link color-blue">
        <i class="icon f7-icons">question_diamond_fill</i> Technical support
      </a>
    </center>
  </div>
</div>
`}}U.id="2105470e04";function j(r,{$:t,$on:d,$f7:n,$update:l,$h:p,$f7ready:o}){let a=!1,e=!1,i={};const s=n.toast.create({text:"UDID copied",position:"top",closeTimeout:1500,closeButton:!0}),c=()=>{n.request.json("https://flekstore.com/rest/device/getLastPayment/",{id:localStorage.device_id}).then(function(u){e=JSON.parse(u.data.data).date,l()})},w=()=>{n.request.json("https://flekstore.com/rest/device/getActivationTime/",{id:localStorage.device_id}).then(function(u){a=JSON.parse(u.data.data),l()})},v=u=>{n.request.json("https://flekstore.com/rest/device/getTariffInfo/",{tariff_id:u}).then(function(g){i=JSON.parse(g.data.data),l()})};return o(()=>{w(),c(),v(4),new ClipboardJS(".copy-udid").on("success",function(g){s.open()})}),function(u){u.$;var g=u.$h;return u.$root,u.$f7,u.$f7route,u.$f7router,u.$theme,u.$update,u.$store,g`
  <div>
    ${r.device.queue==="1"?g`
    <div class="block block-strong block-success inset">
      <center>
        <div class="title">Payment received</div>
        <div class="tariff-description">
          The device will be activated after ${a?a+" ":g`
          <div class="md in-text-preloader">
            <div class="preloader color-white">
              <span class="preloader-inner">
                <svg viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16"></circle>
                </svg>
              </span>
            </div>
          </div>
          `} hours from the moment of payment.
        </div>
        <div class="block inset">
          <b class=""
            >Paid ${e?timeAgo.format(Date.parse(e.replace(/-/g,"/"))):g`
            <div class="md in-text-preloader">
              <div class="preloader color-white">
                <span class="preloader-inner">
                  <svg viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16"></circle>
                  </svg>
                </span>
              </div>
            </div>
            `}
          </b>
        </div>
      </center>
    </div>
    `:g`
    <div class="block block-strong block-success inset">
      <center>
        <div class="title">Waiting for activation</div>
        <div class="tariff-description">
          The device will be activated within 3-14 days from the date of the
          activation request.
        </div>
        <div class="block inset">
          <b class=""
            >Requested ${e?timeAgo.format(Date.parse(e.replace(/-/g,"/"))):g`
            <div class="md in-text-preloader">
              <div class="preloader color-white">
                <span class="preloader-inner">
                  <svg viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16"></circle>
                  </svg>
                </span>
              </div>
            </div>
            `}
          </b>
        </div>
      </center>
    </div>
    <div class="block block-pricing inset">
      <div class="list recovery-header no-hairlines">
        <ul>
          <li class="item-content">
            <div class="item-media">
              <img src="https://flekstore.com/client/img/device/speed.png" />
            </div>
            <div class="item-inner">
              <div class="item-title" style="white-space: unset">
                <div class="title">Express recovery</div>
                <div class="item-header">
                  Accelerated recovery of premium access. Instantly or within
                  ${a?" "+a+" ":g`
                  <div class="md in-text-preloader">
                    <div class="preloader color-white">
                      <span class="preloader-inner">
                        <svg viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="16"></circle>
                        </svg>
                      </span>
                    </div>
                  </div>
                  `} hours (if there are not enough certificates).
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div style="display: grid">
        <a href="/purchase/" class="button button-large button-fill"
          >Restore for ${i.iphone}</a
        >
      </div>
    </div>
    `}

    <div class="block">
      <a
        class="button button-large button-fill button-lite copy-udid"
        data-clipboard-text="${r.device.udid}"
      >
        <i class="icon f7-icons">square_on_square</i> Copy UDID
      </a>
      <center>
        <a href="/faq/" class="link button-link color-blue">
          <i class="icon f7-icons">question_diamond_fill</i> Technical support
        </a>
      </center>
    </div>
  </div>
`}}j.id="9e6e082c13";function N(r,{$:t,$on:d,$f7:n,$update:l,$h:p,$f7ready:o}){let a=!1;a=new Date(r.device.date.replace(/-/g,"/")),a=a.setFullYear(a.getFullYear()+1);const e=n.toast.create({text:"UDID copied",position:"top",horizontalPosition:"center",closeTimeout:1500,closeButton:!0}),i=()=>{n.dialog.create({title:"Link to download",text:`
        Copy the link and download the certificate to your computer. <br>Do not forget to read the guide before downloading!
        <div class="dialog-input-field input"><input type="text" class="dialog-input" value="https://sign.flekstore.com/getCert?id=${r.device.stream}" /></div>
      `,buttons:[{text:"Guide",onClick:function(){r.router.navigate("/article/1/")}},{text:"Close"}],verticalButtons:!0}).open()};return o(()=>{new ClipboardJS(".copy-udid").on("success",function(c){e.open()})}),function(s){s.$;var c=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,c`

<div>
  <div class="block block-strong block-success inset">
    <center>
      <div class="title">Device activated</div>
      <div class="tariff-description">
        You can install apps from the FlekSt0re library
      </div>
      <div class="block inset">
        <b class="">Activation expires ${axisDateFormat.format(a)}</b>
      </div>
    </center>
  </div>
  
  <div class="list inset dev-cert-download">
    <ul>
      <li>
        <a class="item-link item-content" @click=${()=>i()}>
          <div class="item-media">
            <img src="https://flekstore.com/client/img/CertificateImage.png" width="60px"/>
        </div>
          <div class="item-inner">
            <div>
              Application signature certificate
              <div class="item-footer">download</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
  
  <div class="block">
    <a class="button button-large button-fill button-lite copy-udid" data-clipboard-text="${r.device.udid}">
      <i class="icon f7-icons">square_on_square</i> Copy UDID
    </a>
    <center>
      <a href="/faq/" class="link button-link color-blue">
        <i class="icon f7-icons">question_diamond_fill</i> Technical support
      </a>
    </center>
  </div>
  
</div>
`}}N.id="c4e9cc085f";function L(r,{$:t,$on:d,$f7:n,$update:l,$h:p,$f7ready:o,$f7router:a}){let e=!1,i=[];const s=()=>{n.request.json("https://flekstore.com/rest/device/getGifts",{id:localStorage.device_id}).then(function(u){i=JSON.parse(u.data.data),l()})},c=()=>{n.request.json("https://flekstore.com/rest/device/getDevice",{id:localStorage.device_id}).then(function(u){e=JSON.parse(u.data.data),l()})},w=()=>{localStorage.removeItem("device_id"),v()},v=()=>{a.refreshPage()};return o(()=>{localStorage.device_id!==void 0&&(c(),s()),n.toast.close()}),function(u){u.$;var g=u.$h;u.$root,u.$f7,u.$f7route;var b=u.$f7router;return u.$theme,u.$update,u.$store,g`
  <div class="page" data-name="device">
    <div class="navbar navbar-large navbar-transparent">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="left">
        </div>
        <div class="title">Device</div>
        <div class="right">
        </div>
        <div class="title-large">
          <div class="title-large-text">Device</div>
        </div>
      </div>
    </div>
    <div class="page-content ptr-content" @ptr:refresh=${v}>
      <div class="ptr-preloader">
        <div class="preloader"></div>
        <div class="ptr-arrow"></div>
      </div>
      <div class="content-medium-width">
        ${localStorage.device_id!==void 0&&g`
          ${e?g` 
            <div class="list media-list inset device-header-info">
              <ul>
                <li>
                  <div class="item-content">
                    <div class="item-media">
                      <img src="https://flekstore.com/client/img/device/devices/${e.type+""+e.product}.png" />
                    </div>
                    <div class="item-inner">
                      <div class="item-title-row">
                        <div class="item-title">${e.type}</div>
                        ${localStorage.dev_mode?g`
                        <div class="item-after">
                          <a class="link color-red" @click=${()=>w()}>
                            <i class="icon f7-icons">square_arrow_left</i>
                          </a>
                        </div>
                        `:""}
                      </div>
                      <div class="item-subtitle">UDID:</div>
                      <div class="item-footer">${e.udid}</div>
                      <div class="item-subtitle">
                        ${e.stream==="0"||e.stream_active=="0"?g`
                          ${e.queue?g`
                            <div class="chip">
                              <div class="chip-media bg-color-green">
                                <i class="icon f7-icons">checkmark_alt</i>
                              </div>
                              <div class="chip-label">Payment</div>
                            </div>
                            <div class="chip">
                              <div class="chip-media bg-color-orange">
                                <i class="icon f7-icons">timer</i>
                              </div>
                              <div class="chip-label">Activation</div>
                            </div>
                          `:g`
                            <div class="chip">
                              <div class="chip-media bg-color-red">
                                <i class="icon f7-icons">multiply</i>
                              </div>
                              <div class="chip-label">Payment</div>
                            </div>
                            <div class="chip">
                              <div class="chip-media bg-color-red">
                                <i class="icon f7-icons">multiply</i>
                              </div>
                              <div class="chip-label">Activation</div>
                            </div>
                          `}
                        `:g`
                        <div class="chip">
                          <div class="chip-media bg-color-green">
                            <i class="icon f7-icons">checkmark_alt</i>
                          </div>
                          <div class="chip-label">Payment</div>
                        </div>
                        <div class="chip">
                          <div class="chip-media bg-color-green">
                            <i class="icon f7-icons">checkmark_alt</i>
                          </div>
                          <div class="chip-label">Activation</div>
                        </div>
                        `}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            ${i.length?g`
            <div class="list inset dev-cert-download">
              <ul>
                <li>
                  <a href="/gifts_hub/" class="item-link item-content">
                    <div class="item-media">
                      <img src="https://flekstore.com/client/img/device/gifts-colored.png" width="40px"/>
                    </div>
                    <div class="item-inner">
                      <div>
                        Purchased gifts
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            `:""}
          `:g`
            <div class="list media-list inset device-header-info">
              <ul>
                <li>
                  <div class="item-content">
                    <div class="item-media">
                      <div class="device-image-loading"></div>
                    </div>
                    <div class="item-inner">
                      <div class="item-title-row">
                        <div class="item-title skeleton-text skeleton-effect-wave">----------</div>
                      </div>
                      <div class="item-subtitle">UDID:</div>
                      <div class="item-footer skeleton-text skeleton-effect-wave">--------------------------</div>
                      <div class="item-subtitle">
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          `}
        `}
        
        ${localStorage.device_id!==void 0?g`
          ${e&&g`
            ${e.stream=="0"||e.stream_active=="0"?g`
              ${e.queue?g`
                <${j} device="${e}" />
              `:g`
                <${U} device="${e}" router="${b}"/>
              `}
            `:g`
              <${N} device="${e}" router="${b}"/>
            `}
          `}
        `:g`
          <${x} router="${b}"/>
        `}
      </div>
      
    </div>
  </div>
`}}L.id="8434642dbf";function z(r,{$:t,$f7:d,$on:n,$update:l,$f7ready:p}){var o={icon:"http://daramghaus.github.io/icontester/images/iTunesArtwork.png",name:"App Name",version:"",default_settings:1,config:{}},a=!1,e,i=!1,s=A("https://syka.flekstore.com/",{autoConnect:!1}),c;s.on("connect",k=>{console.log("SOCKET CONNECTION"),c?c.upload(document.getElementById("ipa-input")):(c=new ie(s),c.on("ready",function(){console.log("READY UPLOAD"),c.upload(document.getElementById("ipa-input"))}),c.on("start",function(f){console.log("Start uploading",f)}),c.on("stream",function(f){console.log(f);var m=(f.sent/f.size*100).toFixed(0);t("#upload-percent").html(m+"%"),d.progressbar.set("#upload-progressbar",m)}),c.on("complete",function(f){console.log("Upload Complete",f),t("#upload-percent").html("100%"),d.progressbar.set("#upload-progressbar",100),u(f)}),c.on("error",function(f){if(f=String(f),f.includes("Max Uploading File")){var m=_(c.maxFileSize,!0,2);f="Max Uploading File size must be under "+m,d.dialog.alert(f,"Error"),v()}else d.dialog.alert(f,"Error"),v()}),c.on("abort",function(f){onsole.log("Aborted: ",f),v()}))}),s.on("callback",k=>{i=k,console.log(i),l(),k.status===!0&&(e=encodeURIComponent("https://flekstore.com/install_ipa/"+o.name+"/"+a.stream+"/signer_app.plist?filename="+i.message),window.open("itms-services://?action=download-manifest&url="+e,"_self"),s.disconnect()),k.status===!1&&(v(),d.dialog.alert(i.message,"Error"))}),s.on("disconnect",function(){console.log("DISCONNECTED")});const w=()=>{o.status="upload",o.config.name=t("#signer-ipa-app-name").val(),o.config.bundle_id=t("#signer-ipa-bundle-id").val(),l(),s.connect()},v=()=>{s.disconnect(),o.status=!1,l(),t("#upload-percent").html("0%"),d.progressbar.set("#upload-progressbar",0)},u=k=>{o.status="sign",l(),o.config.name=o.config.name==o.name?!1:o.config.name,i={status:"process",message:"Connection to server"},l(),s.emit("start_sign",{device_id:a.id,stream:a.stream,file:k.name,app_name:o.config.name,bundle_id:o.config.bundle_id})},g=()=>{const k=document.getElementById("ipa-input").files;try{new AppInfoParser(k[0]).parse().then(m=>{console.log(m),o.icon=m.icon,o.name=m.package||m.CFBundleName||m.CFBundleDisplayName,o.size=k[0].size,o.version=m.versionName||m.CFBundleShortVersionString,l()}).catch(m=>{console.log(m),d.dialog.alert("Incorrect file format. Please make sure the file is in the right format and not damaged."),d.accordion.open(".accordion-item.select-file"),t("#ipa-input").val()}),o.default_settings&&d.accordion.close(".accordion-item.select-file"),d.accordion.open(".accordion-item.file-preview"),o.default_settings=0}catch(f){console.log(f),d.dialog.alert("Incorrect file format. Please make sure the file is in the right format and not damaged."),d.accordion.open(".accordion-item.select-file"),t("#ipa-input").val()}},b=()=>{t("#ipa-app-name").val(o.name),t("#ipa-bundle-id").val("")},_=(k,f=!1,m=1)=>{const h=f?1e3:1024;if(Math.abs(k)<h)return k+" B";const $=f?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let S=-1;const q=10**m;do k/=h,++S;while(Math.round(Math.abs(k)*q)/q>=h&&S<$.length-1);return k.toFixed(m)+" "+$[S]},P=(k=()=>{})=>{d.request.json("https://flekstore.com/rest/device/getDevice",{id:localStorage.device_id}).then(function(f){a=JSON.parse(f.data.data),l(function(){return k(a)})})},T=()=>{d.tab.show(".view-device-tab",".device-tab-link"),t(".link-device").click(),d.popup.close()};window.onblur=function(){i.status===!0&&(i=!1,o.status=!1,l())};const B=()=>{if(!localStorage.device_id){T();return}P(function(k){if(k.stream_active!=="1"){T();return}t("#ipa-input").click()})};return p(()=>{localStorage.device_id&&P()}),function(k){k.$;var f=k.$h;k.$root,k.$f7,k.$f7route,k.$f7router,k.$theme;var m=k.$update;return k.$store,f`
  <div class="page" data-name="settings">
    <div class="navbar navbar-large navbar-transparent">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="left"></div>
        <div class="title">Signer</div>
        <div class="right"></div>
        <div class="title-large">
          <div class="title-large-text">Signer</div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-medium-width">
        <div
          class="block block-strong margin inset"
          style="background-color: rgba(var(--f7-theme-color-rgb), 0.08)"
        >
          <p>
            Sign and install any app you want. You just need to find the .ipa
            file of the app that interests you on the Internet.
          </p>
          <center>
            <a class="link button-link external" href="https://youtu.be/5NRGq2R0HK4" target="_blank"
              ><i class="icon f7-icons">play_rectangle_fill</i> How it works</a
            >
          </center>
        </div>

        <div class="block accordion-list custom-accordion no-padding">
            <div class="accordion-item file-preview">
              <div class="accordion-item-content">
                <div class="list accordion-list inset">
                    <ul>
                        <li class="accordion-item">
                            <div class="item-content no-chevron">
                              <div class="item-media">
                                <img 
                                  src="${o.icon}" 
                                  id="app-icon-preview" 
                                  width="60px" 
                                  style="border-radius: 23%;"
                                  @error=${()=>{o.icon="icons/error_icon.png",m()}}
                                />
                              </div>
                              <div class="item-inner">
                                <div class="item-title">
                                    ${o.name}
                                    <div class="item-footer">${o.version}</div>
                                </div>
                                <div class="item-after">${_(o.size,!0,2)}</div>
                              </div>
                            </div>
                        </li>
                        ${o.status?f`
                        <div class="block" style="padding: 0 15px 1px;">
                          ${o.status=="upload"?f`
                          <p>Uploaded <span id="upload-percent">0%</span></p>
                          <div>
                            <p><span data-progress="0" class="progressbar" id="upload-progressbar"></span></p>
                          </div>
                          `:f`
                            ${i.status==="process"?f`
                              <div class="signing-status">
                                <p>${i.message}</p>
                                <div>
                                  <p><span class="progressbar-infinite"></span></p>
                                </div>
                              </div>
                            `:f`
                              <a 
                                class="button button-large button-fill margin-top" 
                                @click=${()=>window.open("itms-services://?action=download-manifest&url="+e,"_self")}>
                                <i class="icon f7-icons">cloud_download</i>Install</a
                              >
                            `}
                          `}
                          <a class="button button-large button-lite" @click=${()=>v()}><i class="icon f7-icons">arrow_left_circle_fill</i> Back</a>
                        </div>
                        
                        `:f`
                        <li class="accordion-item">
                          <a class="item-content item-link" href="#">
                              <div class="item-media">
                              <i class="f7-icons normal">gear</i>
                              </div>
                              <div class="item-inner">
                              <div class="item-title">Customize</div>
                              </div>
                          </a>
                          <div class="accordion-item-content">
                              <div class="block margin-top">
                                  <center>
                                  <div class="block-header">This is an advanced settings. We recommend that you <a href="/faq_view/36/" class="link"><b>read the instructions</b></a> before use.</div>
                                  </center>
                              </div>
                              <div class="list inset margin-top">
                                  <ul style="border: 1px solid rgba(var(--f7-theme-color-rgb), 0.15);">
                                  <li class="item-content item-input">
                                      <div class="item-inner">
                                      <div class="item-title item-label">Custom app name</div>
                                      <div class="item-input-wrap">
                                          <input type="text" placeholder="App name" id="signer-ipa-app-name" value="${o.name}"/>
                                      </div>
                                      </div>
                                  </li>
                                  <li class="item-content item-input">
                                      <div class="item-inner">
                                      <div class="item-title item-label">Bundle ID (empty by default)</div>
                                      <div class="item-input-wrap">
                                          <input type="text" placeholder="com.xxxx.xxx" id="signer-ipa-bundle-id" validate pattern="com\.[a-zA-Z]*\.[a-zA-Z]+"/>
                                      </div>
                                      </div>
                                  </li>
                                  </ul>
                              </div>
                              <center>
                                  <div class="block-footer no-margin-bottom">
                                  <b class="text-color-orange">Warning:</b> Bundle ID changing can break certain apps or increase the chances of tweaked apps being detected.
                                  </div>
                              </center>
                              <a class="button button-large button-fill button-lite margin" @click=${()=>b()}>
                                  <i class="icon f7-icons">arrow_clockwise</i> Reset settings
                              </a>
                          </div>
                        </li>
                        <div class="block" style="padding: 10px 15px 1px;">
                            <a class="button button-large button-fill" @click=${()=>w()}><i class="icon f7-icons">pencil_outline</i> Sign App</a>
                        </div>
                        <div class="block" style="padding: 0 15px 1px;">
                            <label class="button button-large button-lite" for="ipa-input"><i class="icon f7-icons">arrow_up_doc_fill</i> Select IPA file</label>
                        </div>
                        `}
                    </ul>
                  </div>
              </div>
            </div>
            <div class="accordion-item accordion-item-opened select-file">
                <div class="accordion-item-content">
                    <div class="block">
                        <input type="file" class="display-none" id="ipa-input" @change=${()=>g()}/>
                        ${a&&a.stream_active==="1"?f`
                          <label class="button button-fill button-large" for="ipa-input">
                            <i class="icon f7-icons" style="font-size: 20px">arrow_up_doc</i>
                            Select IPA file
                          </label>
                        `:f`
                          <a class="button button-fill button-large" @click=${()=>B()}>
                            <i class="icon f7-icons" style="font-size: 20px">arrow_up_doc</i>
                            Select IPA file
                          </a>
                        `}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
`}}z.id="6e82f1b776";function O(r,{$:t,$f7:d,$on:n}){let l,p;const o=()=>{if(localStorage.layout==="dark"){let a=d.utils.colorThemeCSSProperties("#ffffff");setColorTheme(a),l.setValue({hex:"#ffffff"}),localStorage["color-theme"]="#ffffff"}else{let a=d.utils.colorThemeCSSProperties("#000000");setColorTheme(a),l.setValue({hex:"#000000"}),localStorage["color-theme"]="#000000"}};return n("pageInit",()=>{p=d.toggle.create({el:".toggle.toggle-dark",on:{change:function(){if(this.checked){if(localStorage.layout="dark",t("html").removeClass("theme-dark").addClass("theme-dark"),localStorage["color-theme"]==="#000000"){let a=d.utils.colorThemeCSSProperties("#ffffff");setColorTheme(a),l.setValue({hex:"#ffffff"}),localStorage["color-theme"]="#ffffff"}}else if(localStorage.layout="light",t("html").removeClass("theme-dark"),localStorage["color-theme"]==="#ffffff"){let a=d.utils.colorThemeCSSProperties("#000000");setColorTheme(a),l.setValue({hex:"#000000"}),localStorage["color-theme"]="#000000"}}}}),l=d.colorPicker.create({inputEl:"#demo-color-picker-wheel",targetEl:"#demo-color-picker-wheel-value",targetElSetBackgroundColor:!0,modules:["wheel"],openIn:"popover",value:{hex:localStorage["color-theme"]},on:{change:function(a){let e=d.utils.colorThemeCSSProperties(a.value.hex);setColorTheme(e),localStorage["color-theme"]=e["--f7-theme-color"]}}}),localStorage.layout=="light"&&p.toggle()}),function(a){a.$;var e=a.$h;return a.$root,a.$f7,a.$f7route,a.$f7router,a.$theme,a.$update,a.$store,e`
<div class="page" data-name="settings">
  <div class="navbar navbar-large navbar-transparent">
    <div class="navbar-bg"></div>
    <div class="navbar-inner">
      <div class="left">
      </div>
      <div class="title">Settings</div>
      <div class="right">
      </div>
      <div class="title-large">
        <div class="title-large-text">Settings</div>
      </div>
    </div>
  </div>
  <div class="page-content">
    <div class="content-medium-width">
      
      <div class="list inset no-hairlines-between items-inset">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="f7-icons normal">moon_fill</i>
              </div>
              <div class="item-inner">
                <div class="item-title">Dark mode</div>
                <div class="item-after">
                  <label class="toggle toggle-dark toggle-init">
                    <input type="checkbox" checked />
                    <span class="toggle-icon"></span>
                  </label>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="f7-icons normal">paintbrush_fill</i>
              </div>
              <div class="item-inner">
                <div class="item-title">Color theme</div>
                <div class="item-after">
                  <i class="icon demo-list-icon" id="demo-color-picker-wheel-value" style="background-color: ${localStorage["color-theme"]?localStorage["color-theme"]:"#ffffff"};"></i>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a class="item-link item-content no-chevron" @click=${()=>o()}>
              <div class="item-media">
                <i class="f7-icons normal">arrow_clockwise</i>
              </div>
              <div class="item-inner">
                <div class="item-title">Restore color</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <div class="block-title block-title-medium">Documentation</div>
      <div class="list inset no-hairlines-between items-inset">
        <ul style="background: transparent;">
          <li>
            <a href="/faq_view/3/" class="item-link item-content">
              <div class="item-media"><i class="f7-icons">info_circle_fill</i></div>
              <div class="item-inner">
                <div class="item-title">Terms of services</div>
              </div>
            </a>
          </li>
          <li>
            <a href="/faq/" class="item-link item-content">
              <div class="item-media"><i class="f7-icons">question_diamond_fill</i></div>
              <div class="item-inner">
                <div class="item-title">FAQ</div>
              </div>
            </a>
          </li>
          <li>
            <a href="/faq_view/4/" class="item-link item-content">
              <div class="item-media"><i class="f7-icons">hand_raised_fill</i></div>
              <div class="item-inner">
                <div class="item-title">Privacy policy</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      
      <div class="list inset no-hairlines-between items-inset">
        <ul style="background: transparent;">
          <li>
            <a href="https://twitter.com/flekstore_com" class="item-link item-content external">
              <div class="item-media"><i class="f7-icons">logo_twitter</i></div>
              <div class="item-inner">
                <div class="item-title">Follow us</div>
              </div>
            </a>
          </li>
          <li>
            <a href="https://t.me/ru_flekstore" class="item-link item-content external">
              <div class="item-media"><i class="f7-icons">paperplane_fill</i></div>
              <div class="item-inner">
                <div class="item-title">Telegram RU</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- <div class="list inset no-hairlines-between items-inset">
        <ul style="background: transparent;">
          <li>
            <a class="item-link item-content" @click=${()=>location.reload()}>
              <div class="item-media"><i class="f7-icons">arrow_clockwise</i></div>
              <div class="item-inner">
                <div class="item-title">Reload app</div>
              </div>
            </a>
          </li>
        </ul>
      </div> -->
      
      <center>
        <div class="block-header">
          flekstore.com © 2015-${new Date().getFullYear()}
        </div>
      </center>
      
    </div>
  </div>
</div>
`}}O.id="dff0553ae6";function R(r,{$:t,$on:d,$f7:n,$update:l,$h:p,$f7ready:o}){let a=!1;const e=()=>{n.request.json("https://flekstore.com/rest/news/getArticle",{id:r.id}).then(function(i){a=i.data,l()})};return o(()=>{e()}),function(i){i.$;var s=i.$h;return i.$root,i.$f7,i.$f7route,i.$f7router,i.$theme,i.$update,i.$store,s`
<div class="page article-page" data-name="article">
	<!-- Top Navbar -->
	<div class="navbar">
		<div class="navbar-inner">
			<div class="left article-back">
				<a class="link back"><i class="icon f7-icons">arrow_left</i></a>
			</div>
			<div class="title sliding"></div>
			<div class="right"></div>
		</div>
	</div>
		<div class="page-content no-padding-top content-medium-width">
			<div class="art-block">
				${a?s`
				<img src="${a.image}"/>
				<backout></backout>
				<div class="title">
					${a.title}
				</div>
				`:s`
				<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
				 width="300.000000pt" height="180.000000pt" viewBox="0 0 300.000000 180.000000"
				 preserveAspectRatio="xMidYMid meet" style="background:var(--skeleton-color);">
				</svg>
				<backout></backout>
				<div class="title skeleton-text skeleton-effect-wave">
					--------- ------------ ---------- -----
				</div>
				`}
			</div>
			${a?s`
			<div class="block views-counter">
				<div class="block-header">
					${a&&s`
					<div>${axisDateFormat.format(Date.parse(a.date.replace(/-/g,"/")))}</div>
					`}
					<div><i class="icon f7-icons">eye</i> ${a.views}</div>
				</div>
			</div>
			<div class="block text-document-content" innerHTML=${a.text}></div>
			`:s`
			<center class="md margin-top">
				<div class="preloader">
					<span class="preloader-inner">
						<svg viewBox="0 0 36 36">
							<circle cx="18" cy="18" r="16"></circle>
						</svg>
					</span>
				</div>
			</center>
			`}
		</div>
</div>
`}}R.id="1aa4ed59d0";function M(r,{$:t,$on:d,$f7:n,$update:l,$h:p,$f7ready:o,$onUnmounted:a}){let e=!1,i=!1,s=!1,c=!1,w=!1;window.onblur=function(){s.status===!0&&(s=!1,l())};const v=()=>{n.accordion.toggle(".app-sign-settings")};n.on("accordionOpen",function(m){t(".toggle-sign-settings").html('<i class="f7-icons">chevron_up_circle</i>')}),n.on("accordionClose",function(m){t(".toggle-sign-settings").html('<i class="f7-icons">gear</i>')});const u=()=>{t("#ipa-app-name").val(e.name),t("#ipa-bundle-id").val("")},g={slidesPerView:"auto",spaceBetween:15,grabCursor:!0,on:{imagesReady:function(){c=!0,l()}}};let b=n.photoBrowser.create({theme:"dark",captionsTheme:"theme",iconsColor:"theme-color"});const _=()=>{n.request.json("https://flekstore.com/rest/apps/getApp",{id:r.id}).then(function(m){e=m.data,l(function(){n.swiper.create(".swiper-container.screenshots",g),b.params.photos=e.photos})})},P=()=>{n.request.json("https://flekstore.com/rest/device/getDevice",{id:localStorage.device_id}).then(function(m){i=JSON.parse(m.data.data),l()})},T=()=>{var m=t("#ipa-app-name").val();m==e.name&&(m=!1),e.install_url.search(/_igd/g)!=-1&&(m=e.name);var h=t("#ipa-bundle-id").val();s={status:"process",message:"Connection to server"},l();const $=A("https://sign.flekstore.com/");$.emit("start_sign",{device_id:i.id,stream:i.stream,file:e.install_url,app_name:m,bundle_id:h}),$.on("callback",S=>{console.log(S),s=S,l(),S.status===!0&&(w=encodeURIComponent("https://flekstore.com/install_ipa/"+r.id+"/"+i.stream+"/app.plist?filename="+s.message),window.open("itms-services://?action=download-manifest&url="+w,"_self"),console.log("Process Finished. Disconnected"),$.disconnect()),S.status===!1&&n.dialog.alert(s.message,"Error")}),$.on("connect_error",function(){console.log("Connection Failed"),$.disconnect(),n.dialog.alert("Connection failed. Try again or contact technical support.","Error"),s=!1,l()}),a(()=>{console.log("Process Finished. Disconnected"),$.disconnect()})},B=()=>{n.tab.show(".view-device-tab",".device-tab-link"),t(".link-device").click(),n.popup.close()},k=m=>{b.open(m)},f=(m,h=!1,$=1)=>{const S=h?1e3:1024;if(Math.abs(m)<S)return m+" B";const q=h?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let y=-1;const C=10**$;do m/=S,++y;while(Math.round(Math.abs(m)*C)/C>=S&&y<q.length-1);return m.toFixed($)+" "+q[y]};return o(()=>{_(),localStorage.device_id&&P()}),function(m){m.$;var h=m.$h;return m.$root,m.$f7,m.$f7route,m.$f7router,m.$theme,m.$update,m.$store,h`
  <div class="popup popup-push flek-swipe-handler">
    <div class="view">
      <div class="page">
        <div class="popup-push-navbar">
          <div class="link popup-close"><i class="icon f7-icons color-gray" style="font-size:44px;">chevron_compact_down</i></div>
        </div>
        <div class="page-content app-info">
          <div class="list media-list no-hairlines">
            <ul>
              <li>
                <div class="item-content">
                  <div class="item-media">
                    <img src="${e.icon}" />
                  </div>
                  <div class="item-inner">
                    <div class="item-title-row">
                      ${e?h`
                      <div class="item-title">${e.name}</div>
                      `:h`
                        <div class="item-title skeleton-text skeleton-effect-wave">------------ ----------</div>
                      `}
                    </div>
                    ${e?h`
                    <div class="item-text">By ${e.developer}</div>
                    ${!i||i.stream=="0"||i.stream_active=="0"?h`
                      <div class="row justify-content-flex-start">
                        <a class="col button button-round button-fill" @click=${()=>B()}>Sign App</a>
                        <a class="col button button-round toggle-sign-settings" @click=${()=>v()}><i class="f7-icons">gear</i></a>
                      </div>
                    `:h`
                      ${s?h`
                        ${s.status==="process"?h`
                          <div class="signing-status">
                            <div class="item-header" style="font-size:14px">Please wait</div>
                            ${s.message}
                            <span class="progressbar-infinite"></span>
                          </div>
                        `:h`
                          <a class="button button-small button-round button-fill" @click=${()=>window.open("itms-services://?action=download-manifest&url="+w,"_self")}>Install</a>
                        `}
                      `:h`
                        <div class="row justify-content-flex-start">
                          <a class="col button button-round button-fill" @click=${()=>T()}>Sign App</a>
                          <a class="col button button-round toggle-sign-settings" @click=${()=>v()}><i class="f7-icons">gear</i></a>
                        </div>
                      `}
                    `}
                    `:h`
                      <div class="item-text skeleton-text skeleton-effect-wave">-------------</div>
                    `}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="accordion-item app-sign-settings">
             <div class="accordion-item-content" style="background: var(--search-form-bg);">
                <div class="accordion-inner">
                  <div class="block margin-top">
                    <center>
                      <div class="block-header">This is an advanced settings. We recommend that you <a href="/faq_view/36/" class="link"><b>read the instructions</b></a> before use.</div>
                    </center>
                  </div>
                  <div class="list inset margin-top">
                    <ul style="border: 1px solid rgba(var(--f7-theme-color-rgb), 0.15);">
                      <li class="item-content item-input">
                        <div class="item-inner">
                          <div class="item-title item-label">Custom app name</div>
                          <div class="item-input-wrap">
                            <input type="text" placeholder="App name" id="ipa-app-name" value="${e.name}"/>
                          </div>
                        </div>
                      </li>
                      <!-- <li class="item-content item-input">
                        <div class="item-inner">
                          <div class="item-title item-label">Custom version (empty by default)</div>
                          <div class="item-input-wrap">
                            <input type="text" placeholder="0.x.x" id="ipa-app-version" validate pattern="[0-9\.]*[0-9]"/>
                          </div>
                        </div>
                      </li> -->
                      <li class="item-content item-input">
                        <div class="item-inner">
                          <div class="item-title item-label">Bundle ID (empty by default)</div>
                          <div class="item-input-wrap">
                            <input type="text" placeholder="com.xxxx.xxx" id="ipa-bundle-id" validate pattern="com\.[a-zA-Z]*\.[a-zA-Z]+"/>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <center>
                    <div class="block-footer no-margin-bottom">
                      <b class="text-color-orange">Warning:</b> Bundle ID changing can break certain apps or increase the chances of tweaked apps being detected.
                    </div>
                  </center>
                  ${!i||i.stream=="0"||i.stream_active=="0"?h`
                    <a class="button button-large button-fill margin" id="sign-from-settings" @click=${()=>B()}>
                      Sign app
                    </a>
                  `:h`
                    ${s?h`
                      ${s.status!=="process"&&h`
                        <a class="button button-large button-fill margin" @click=${()=>window.open("itms-services://?action=download-manifest&url="+w,"_self")}>
                          Install
                        </a>
                      `}
                    `:h`
                    <a class="button button-large button-fill margin" id="sign-from-settings" @click=${()=>T()}>
                      Sign app
                    </a>
                    `}
                  `}
                  <a class="button button-large button-fill button-lite margin" @click=${()=>u()}>
                    <i class="icon f7-icons">arrow_clockwise</i> Reset settings
                  </a>
                </div>
             </div>
          </div>
          ${e?h`
            ${e.warning&&h`
            <div class="block block-strong block-warning margin inset">
              ${e.warning}
            </div>
            `}
          `:""}
          <center>
            <div class="row block inset block-top-info">
              <div class="col">
                ${e?h`
                <div class="block-title block-title-medium" style="margin-top: 10px">${e.version}</div>
                `:h`
                <div class="block-title block-title-medium skeleton-text skeleton-effect-wave" style="margin-top: 10px">--------</div>
                `}
                <p class="block-header">Version</p>
              </div>
              <div class="col">
                ${e?h`
                <div class="block-title block-title-medium" style="margin-top: 10px">${e.downloads}</div>
                `:h`
                <div class="block-title block-title-medium skeleton-text skeleton-effect-wave" style="margin-top: 10px">--------</div>
                `}
                <p class="block-header">Downloads</p>
              </div>
            </div>
          </center>
          <div class="swiper-container screenshots" ${c?"":h`style="visibility: hidden;"`}>
            <div class="swiper-wrapper">
              ${e.photos&&h`
                ${e.photos.map(($,S)=>h`
                  <a class="link swiper-slide" @click=${()=>k(S)}>
                    <img src="${$}"/>
                  </a>
                `)}
              `}
            </div>
          </div>
          <div class="block-title block-title-medium">Description</div>
          <div class="block no-margin-top" innerHTML=${e.description}></div>
          ${e?h`
          <div class="block-title block-title-medium">Size</div>
          <div class="block">${f(e.size,!0,2)}</div>
          <div class="block-title block-title-medium">Updated</div>
          <div class="block">${axisDateFormat.format(Date.parse(e.date.replace(/-/g,"/")))}</div>
          `:h`
          <div class="block-title no-margin-top skeleton-text skeleton-effect-wave">
            ----------------- ------- ----<br/>
            ----------- ------- --------- ------<br/>
            ------- -----<br/>
            ---------------------- ------<br/>
            <br/><br/>
            -----------<br/>
            ------------------------
            <br/><br/>
            -----------<br/>
            ------------------------
          </div>
          `}
        </div>
      </div>
    </div>
  </div>
`}}M.id="76aaaad4af";function V(r,{$:t,$on:d,$f7:n,$update:l,$h:p,$f7ready:o}){let a=!1;const e=()=>{n.request.json("https://flekstore.com/rest/faq/getList",{help:1}).then(function(i){a=JSON.parse(i.data.data),l()})};return o(()=>{e()}),function(i){i.$;var s=i.$h;return i.$root,i.$f7,i.$f7route,i.$f7router,i.$theme,i.$update,i.$store,s`
  <div class="page faq-list">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <a href="#" class="link back">
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </a>
        </div>
        <div class="title">FAQ</div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-medium-width">
        <div class="list links-list list-links medium-inset">
          <ul style="background: transparent">
            ${a?s`
              ${a.map(c=>s`
                <li><a href="/faq_view/${c.id}/">${c.title}</a></li>
              `)}
            `:s`
              ${Array(8).fill().map(c=>s`
                <li><a href="#" class="skeleton-text skeleton-effect-wave">--------------------------------<br/>---------------</a></li>
              `)}
            `}
          </ul>
        </div>
      </div>
    </div>
  </div>
`}}V.id="85e9204c56";function G(r,{$f7:t,$update:d,$h:n,$f7ready:l}){let p=!1,o=!1;const a=()=>{t.request.json("https://flekstore.com/rest/faq/getItem",{id:r.id}).then(function(i){p=i.data,d()})},e=()=>{t.request.json("https://flekstore.com/rest/device/getDevice",{id:localStorage.device_id}).then(function(i){o=JSON.parse(i.data.data),d()})};return l(()=>{a(),e()}),function(i){i.$;var s=i.$h;return i.$root,i.$f7,i.$f7route,i.$f7router,i.$theme,i.$update,i.$store,s`
  <div class="popup popup-push flek-swipe-handler">
    <div class="view">
      <div class="page">
        <div class="popup-push-navbar">
          <div class="link popup-close"><i class="icon f7-icons color-gray" style="font-size:44px;">chevron_compact_down</i></div>
        </div>
        <div class="page-content">
          
          ${p?s`
          <div class="block-title block-title-medium" style="white-space: inherit;">${p.title}</div>
          `:s`
          <div class="block-title block-title-medium skeleton-text skeleton-effect-wave" style="white-space: inherit;">--------------------------------<br/>-----------------</div>
          `}
          ${p?s`
          <div class="block text-document-content" innerHTML=${p.text}></div>
          `:s`
          <center class="md margin-top">
            <div class="preloader">
              <span class="preloader-inner">
                <svg viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16"></circle>
                </svg>
              </span>
            </div>
          </center>
          `}
          
          ${p&&p.help=="1"&&o&&s`
            ${o.queue||o.stream!="0"?s`
            <div class="row justify-content-center">
              <a class="button button-large button-fill button-lite external" href="mailto:premium@flekstore.com?subject=UDID: ${o.udid} iOS: ${o.ios}">
                <i class="icon f7-icons">envelope_fill</i> I still need help
              </a>
            </div>
            `:""}
          `}
          
        </div>
      </div>
    </div>
  </div>
`}}G.id="0339d4d198";function J(r,{$f7:t,$update:d,$h:n,$f7ready:l,$on:p,$f7router:o,$:a}){let e=""+Math.random().toString(36).substr(2,9);const i=()=>{t.tab.show(".view-main",".apps-tab-link"),a(".link-apps").click()},s=c=>{a(".purchase-button").attr("href","https://flekstore.com/rest/device/"+c+"/?id="+localStorage.device_id+"&p="+e)};return p("popupClose",(c,w)=>{o.navigate("/device/",{reloadCurrent:!0,ignoreCache:!0})}),window.addEventListener("focus",function(){t.request.json("https://flekstore.com/rest/device/saveIp",{device_id:localStorage.device_id}).then(function(c){c.data.status==="ok"&&console.log("ip saved || "+c.data.message)})}),function(c){c.$;var w=c.$h;return c.$root,c.$f7,c.$f7route,c.$f7router,c.$theme,c.$update,c.$store,w`
<div class="popup popup-push flek-swipe-handler">
  <div class="view">
    <div class="page">
      <div class="popup-push-navbar">
        <div class="link popup-close"><i class="icon f7-icons color-gray" style="font-size:44px;">chevron_compact_down</i></div>
      </div>
      <div class="page-content">
        
        <div class="block">
          <center>
            <p>
              By paying for activation, you confirm that you accept the <a href="/faq_view/3/" class="link color-blue"><b>Terms of service</b></a>
            </p>
          </center>
          <!-- <div class="swiper-container news">
            <div class="swiper-wrapper justify-content-center">
              <a href="/article/6/" class="link swiper-slide popup-close" @click=${()=>i()}>
                <img src="https://i.imgur.com/fSrmxGT.jpg" width="300.000000pt" height="180.000000pt"/>
                <backout></backout>
                <div class="title text-color-white">
                  What do you need to know before paying
                </div>
              </a>
            </div>
          </div> -->
          <!-- <center><p>and terms of services</p></center>
          <a href="/faq_view/3/" class="button button-large button-fill button-lite">
            <i class="icon f7-icons">doc</i> Terms of services
          </a> -->
        </div>
        
          <div class="list inset no-hairlines-between items-inset">
            <ul style="background: transparent;">
              <li>
                <a href="/article/6/" class="item-link item-content popup-close" @click=${()=>i()}>
                  <div class="item-media"><i class="f7-icons">question_diamond</i></div>
                  <div class="item-inner">
                    <div class="item-title" style="white-space: inherit;">What do you need to know before paying</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="md list inset no-hairlines-between items-inset">
            <ul>
              <li>
                <label class="item-radio item-radio-icon-start item-content" @click=${()=>s("paypalRedirect")}>
                  <input type="radio" name="demo-radio-start" checked />
                  <i class="icon icon-radio"></i>
                  <div class="item-inner">
                      <img src="https://flekstore.com/client/img/device/paypal_methods.png?1" style="width:100%; max-width: 250px; padding: 10px 0;"/>
                  </div>
                </label>
              </li>
              <!-- <li>
                <label class="item-radio item-radio-icon-start item-content" @click=${()=>s("freekassaVisaRedirect")}>
                  <input type="radio" name="demo-radio-start"/>
                  <i class="icon icon-radio"></i>
                  <div class="item-inner">
                      <img src="https://flekstore.com/client/img/device/visa_mc_usd_methods.png?1" style="max-width: 200px; padding: 10px 0;"/>
                  </div>
                </label>
              </li> -->
              <li>
                <label class="item-radio item-radio-icon-start item-content" @click=${()=>s("payeerRedirect")}>
                  <input type="radio" name="demo-radio-start"/>
                  <i class="icon icon-radio"></i>
                  <div class="item-inner" style="display: block;">
                    ${r.amount?w`
                      <span class="price-text text-color-gray margin-right-half"><s>${r.amount}</s></span>
                      <b class="price-text text-color-green">${r.amount-1}</b>
                    `:""}
                    <img src="https://flekstore.com/client/img/device/payeer_crypto_methods.png?1" style="width:100%; max-width: 250px; padding: 10px 0 0;"/>
                  </div>
                </label>
              </li>
              <li>
                <label class="item-radio item-radio-icon-start item-content" @click=${()=>s("freekassaRedirect")}>
                  <input type="radio" name="demo-radio-start" />
                  <i class="icon icon-radio"></i>
                  <div class="item-inner" style="display: block;">
                    ${r.amount?w`
                      <span class="price-text text-color-gray margin-right-half"><s>${r.amount}</s></span>
                      <b class="price-text text-color-green">${r.amount-1}</b>
                    `:""}
                      <img src="https://flekstore.com/client/img/device/fk_ru_methods.png?2" style="width:100%; max-width: 250px; padding: 10px 0 0;"/>
                  </div>
                </label>
              </li>
              
            </ul>
          </div>
          <div class="block block-strong block-warning margin inset">
            It is easy to pay with cryptocurrency through online exchangers at <a herf="https://www.bestchange.com/" class="link color-blue external" target="_blank">bestchange.com</a>
          </div>
        <div class="block">
          <a href="https://flekstore.com/rest/device/paypalRedirect/?id=${localStorage.device_id}&p=${e}" class="button button-large button-fill external purchase-button" target="_blank">
            <i class="icon f7-icons">arrow_right_circle_fill</i> Purchase
          </a>
        </div>
        <!-- <div class="block block-strong block-warning margin inset">
          If the PayPal payment page doesn't open the first time, please try again or reload the PayPal page.
        </div> -->
        
      </div>
    </div>
  </div>
</div>
`}}J.id="c8fb3fe7c7";function Y(r,{$f7:t,$update:d,$h:n,$f7ready:l,$on:p,$f7router:o,$:a}){let e=""+Math.random().toString(36).substr(2,9);return p("popupClose",(i,s)=>{}),window.addEventListener("focus",function(){t.request.json("https://flekstore.com/rest/device/saveIp",{device_id:localStorage.device_id}).then(function(i){i.data.status==="ok"&&console.log("ip saved || "+i.data.message)})}),function(i){i.$;var s=i.$h;return i.$root,i.$f7,i.$f7route,i.$f7router,i.$theme,i.$update,i.$store,s`
<div class="popup popup-push flek-swipe-handler">
  <div class="view">
    <div class="page">
      <div class="popup-push-navbar">
        <div class="link popup-close"><i class="icon f7-icons color-gray" style="font-size:44px;">chevron_compact_down</i></div>
      </div>
      <div class="page-content">
        
        <div class="block block-pricing inset" style="background-image: linear-gradient(
          150deg, rgba(0, 90, 253, 0.1) 30%, rgb(0 90 255 / 40%) 100%), linear-gradient(
          30deg, rgba(0, 161, 255, 0.65) 0%, rgb(0 202 255 / 30%) 46%, rgba(255, 0, 224, 0.3) 100%);">
          <div class="list pricing-header no-hairlines">
            <ul>
              <li class="item-content">
                <div class="item-media">
                  <img src="https://flekstore.com/client/img/fspro-gift-icon.png" class="pricing-icon" style="padding:0 5px"/>
                </div>
                <div class="item-inner" style="margin: 0">
                  <div class="item-title" style="white-space: unset;">
                    <div class="title">A Christmas gift</div>
                    <div class="item-subtitle">
                      <div class="chip color-gray margin-right-half">
                        <div class="chip-label"><s class="">$20.99</s></div>
                      </div>
                      <div class="chip color-orange">
                        <div class="chip-label"><span class="price-text">$15.99</span></div>
                      </div>
                    </div>
                    <div class="item-footer">one-time payment</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <center>
            <div class="tariff-description padding-bottom">
              You can purchase a gift card for premium access to FlekSt0re apps library at a discounted price.
            </div>
          </center>
          <div style="display:grid;">
            <a href="https://flekstore.com/rest/device/giftPaypalRedirect/?id=${localStorage.device_id}&p=${e}" class="button button-large button-fill external" target="_blank">
              <i class="icon f7-icons">arrow_right_circle_fill</i> Purchase gift
            </a>
          </div>
        </div>
        
        <div class="block">
          <!-- <center>
            <p>
              The gift code will be in the settings section after payment.
            </p>
          </center> -->
          <a href="/faq_view/3/" class="button button-large button-fill button-lite">
            <i class="icon f7-icons">doc</i> Terms of services
          </a>
          <!-- <a href="https://flekstore.com/rest/device/paypalRedirect/?id=${localStorage.device_id}&p=${e}" class="button button-large button-fill external" target="_blank">
            <i class="icon f7-icons">arrow_right_circle_fill</i> Purchase gift
          </a> -->
        </div>
        <div class="block block-strong block-warning margin inset">
          If the PayPal payment page doesn't open the first time, please try again or reload the PayPal page.
        </div>
        
      </div>
    </div>
  </div>
</div>
`}}Y.id="301a7fae15";function W(r,{$:t,$on:d,$f7:n,$update:l,$h:p,$f7ready:o}){let a=!1;const e=n.toast.create({text:"Link copied",position:"top",horizontalPosition:"center",closeTimeout:1500,closeButton:!0}),i=()=>{n.request.json("https://flekstore.com/rest/device/getGifts",{id:localStorage.device_id}).then(function(s){a=JSON.parse(s.data.data),l()})};return o(()=>{i(),new ClipboardJS(".copy-gift-link").on("success",function(c){e.open()})}),function(s){s.$;var c=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,c`
  <div class="page faq-list">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <a href="#" class="link back">
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </a>
        </div>
        <div class="title">Gifts</div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-small-width">
        <center class="block">
          <p>Copy the link to the gift and send it to the person to whom it is intended. </p>
        </center>
            ${a?c`
              ${a.map(w=>c`
              <div class="block block-gift inset">
                <center>
                  <div class="gift-content">
                    <div class="">
                      <img src="https://flekstore.com/client/img/device/Crown2.png" class="gift-img"/>
                    </div>
                    <div class="gift-inner">
                      <div class="gift-title">Premium access coupon</div>
                      <p>${w.code} 
                      ${w.used&&c`
                        <div class="chip chip-outline color-red">
                          <div class="chip-label">Used</div>
                        </div>
                      `}
                      </p>
                    </div>
                  </div>
                  <div style="display:grid;">
                    <a href="" class="button button-large button-fill button-lite no-margin-bottom copy-gift-link" data-clipboard-text="https://flekstore.com/gift/${w.code}">
                      <i class="icon f7-icons">link</i> Copy link
                    </a>
                  </div>
                </center>
              </div>
              `)}
            `:c`
              <div class="infinite-scroll-preloader">
                <center class="md margin-top">
                  <div class="preloader">
                    <span class="preloader-inner">
                      <svg viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16"></circle>
                      </svg>
                    </span>
                  </div>
                </center>
              </div>
            `}
      </div>
    </div>
  </div>
`}}W.id="d4512f0565";function H(){return function(r){r.$;var t=r.$h;return r.$root,r.$f7,r.$f7route,r.$f7router,r.$theme,r.$update,r.$store,t`
<div class="page">
  <div class="navbar">
    <div class="navbar-bg"></div>
    <div class="navbar-inner sliding">
      <div class="left">
        <a href="#" class="link back">
          <i class="icon icon-back"></i>
          <span class="if-not-md">Back</span>
        </a>
      </div>
      <div class="title">Not found</div>
    </div>
  </div>
  <div class="page-content">
    <div class="block block-strong">
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </div>
  </div>
</div>
`}}H.id="65a2d7e09f";var ne=[{path:"/apps/",component:F,options:{props:{list_config:{page:0,search:!1,filter:"updates"}}}},{path:"/device/",component:L},{path:"/signer/",component:z},{path:"/settings/",component:O},{path:"/article/:id/",component:R},{path:"/app_view/:id/",popup:{push:!0,swipeToClose:"to-bottom",component:M}},{path:"/purchase/",popup:{push:!0,swipeToClose:"to-bottom",component:J}},{path:"/purchase_gift/",popup:{push:!0,swipeToClose:"to-bottom",component:Y}},{path:"/gifts_hub/",component:W},{path:"/faq/",component:V},{path:"/faq_view/:id/",popup:{push:!0,swipeToClose:"to-bottom",component:G}},{path:"(.*)",component:H}];(function(r=window){var t=0,d=!1,n=!1;try{var l=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("test",null,l)}catch(v){}var p=function(v){var u=v.target,g=window.innerWidth/window.document.documentElement.clientWidth;if(!(v.touches.length>1||g!==1)){for(;u!==document.body&&u!==document;){var b=window.getComputedStyle(u);if(!b)break;if(u.nodeName==="INPUT"&&u.getAttribute("type")==="range")return;var _=b.getPropertyValue("-webkit-overflow-scrolling"),P=b.getPropertyValue("overflow-y"),T=parseInt(b.getPropertyValue("height"),10),B=_==="touch"&&(P==="auto"||P==="scroll"),k=u.scrollHeight>u.offsetHeight;if(B&&k){var f=v.touches?v.touches[0].screenY:v.screenY,m=t<=f&&u.scrollTop===0,h=t>=f&&u.scrollHeight-u.scrollTop===T;(m||h)&&v.preventDefault();return}u=u.parentNode}v.preventDefault()}},o=function(v){t=v.touches?v.touches[0].screenY:v.screenY},a=function(){window.addEventListener("touchstart",o,n?{passive:!1}:!1),window.addEventListener("touchmove",p,n?{passive:!1}:!1),d=!0},e=function(){window.removeEventListener("touchstart",o,!1),window.removeEventListener("touchmove",p,!1),d=!1},i=function(){return d},s=document.createElement("div");document.documentElement.appendChild(s),s.style.WebkitOverflowScrolling="touch";var c="getComputedStyle"in window&&window.getComputedStyle(s)["-webkit-overflow-scrolling"]==="touch";document.documentElement.removeChild(s),c&&a();var w={enable:a,disable:e,isEnabled:i};typeof I!="undefined"&&I.exports&&(I.exports=w),typeof r.define=="function"?function(v){v("iNoBounce",[],function(){return w})}(r.define):r.iNoBounce=w})(void 0);function Z(r,{$update:t,$f7router:d,$f7:n,$on:l,$:p}){let o="apps";const a=e=>{n.tab.show(".view-"+e+"-tab","."+e+"-tab-link"),o=e,t()};return function(e){e.$;var i=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,i`
	<div class="panel panel-left panel-cover panel-init" data-visible-breakpoint="960">
		<div class="view view-left-panel" data-name="left">
			<div class="page">
				<div class="page-content">
					
					<center class="panel-logo" style="padding-top: 8vh">
						<i class="fs-icon" style="font-size: 45px"></i>
					</center>
					<div class="list menu-list no-hairlines">
						<ul style="background: transparent;">
							<li>
								<a 
									class="item-content link-apps item-link  ${o==="apps"?"item-selected":""}"
									@click=${()=>a("apps")}
								>
									<div class="item-media">
										<i class="icon f7-icons">layers_alt_fill</i>
									</div>
									<div class="item-inner">
										<div class="item-title">Apps</div>
									</div>
								</a>
							</li>
							<li>
								<a
									class="item-content link-device item-link ${o==="device"?"item-selected":""}"
									@click=${()=>a("device")}
								>
									<div class="item-media">
										<i class="icon f7-icons">device_phone_portrait</i>
									</div>
									<div class="item-inner">
										<div class="item-title">Device</div>
									</div>
								</a>
							</li>
							<li>
								<a
									class="item-content link-signer item-link ${o==="signer"?"item-selected":""}"
									@click=${()=>a("signer")}
								>
									<div class="item-media">
										<i class="icon f7-icons">pencil_outline</i>
									</div>
									<div class="item-inner">
										<div class="item-title">Signer</div>
									</div>
								</a>
							</li>
							<li>
								<a 
									class="item-content link-settings item-link ${o==="settings"?"item-selected":""}"
									@click=${()=>a("settings")}
								>
									<div class="item-media">
										<i class="icon f7-icons">gear_alt_fill</i>
									</div>
									<div class="item-inner">
										<div class="item-title">Settings</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>
	</div>
`}}Z.id="5b8c24e0f6";function K(r,t){if(!t||!r||(typeof t=="string"&&(t=r.$(t)[0]),!t))return;if(!t.querySelector(".tab-link-highlight")){const p=document.createElement("span");p.classList.add("tab-link-highlight"),t.querySelector(".toolbar-inner, .tabbar-inner").appendChild(p),r.toolbar.setHighlight(t)}const d=()=>{t.classList.add("lamp-tabbar","tabbar-highlight");const p=t.querySelector(".tab-link-active");if(!p)return;const o=p.style.getPropertyValue("--lamp-color");t.style.setProperty("--active-lamp-color",o||"")},n=p=>{!p||p.forEach(o=>{o.type==="attributes"&&o.target&&!o.target.classList.contains("tab-link")||d()})};new MutationObserver(n).observe(t.querySelector(".toolbar-inner"),{childList:!0,subtree:!0,attributes:!0}),d()}function Q(r,{$:t,$f7:d,$el:n,$update:l,$onMounted:p}){let o=0;return d.device.standalone||localStorage.in_browser?t(".install-screen").remove():t(".install-screen-page").css("display","block"),localStorage.dev_mode&&t(".install-screen").remove(),p(()=>{const a=n.value.find(".tabbar")[0];console.log(a),K(d,a),console.log(K),t(".close-install-screen").on("click",function(e){localStorage.in_browser=1,t(".install-screen").remove()}),t(".tab-link").on("click",function(e){t(".link-"+t(this).data("tabname")).click()}),localStorage.dev_mode||t(".dev-mode").on("click",function(){o++,o>=10&&(localStorage.dev_mode=1,t(".install-screen").remove())}),d.request.json("https://flekstore.com/rest/apps/getAppVersion/").then(function(e){console.log(e.data);let i=e.data.data;localStorage.app_version?i!==localStorage.app_version&&(localStorage.app_version=i,location.reload()):localStorage.app_version=i})}),function(a){a.$;var e=a.$h;return a.$root,a.$f7,a.$f7route,a.$f7router,a.$theme,a.$update,a.$store,e`
  <div id="app">
    <!-- Left panel with cover effect -->
    <${Z} />
    <!-- Views/Tabs container -->
    <div class="views tabs safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <div class="toolbar toolbar-bottom toolbar-main tabbar tabbar-labels">
        <div class="toolbar-inner">
          <a
            href="#view-apps"
            class="tab-link apps-tab-link tab-link-active"
            data-tabname="apps"
          >
            <i class="icon f7-icons if-not-md">layers_alt_fill</i>
            <span class="tabbar-label">Apps</span>
          </a>
          <a
            href="#view-device"
            class="tab-link device-tab-link"
            data-tabname="device"
          >
            <i class="icon f7-icons if-not-md">device_phone_portrait</i>
            <span class="tabbar-label">Device</span>
          </a>
          <a
            href="#view-signer"
            class="tab-link signer-tab-link"
            data-tabname="signer"
          >
            <i class="icon f7-icons if-not-md">pencil_outline</i>
            <span class="tabbar-label">Signer</span>
          </a>
          <a
            href="#view-settings"
            class="tab-link settings-tab-link"
            data-tabname="settings"
          >
            <i class="icon f7-icons if-not-md">gear_alt_fill</i>
            <span class="tabbar-label">Settings</span>
          </a>
        </div>
      </div>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <div
        id="view-apps"
        class="view view-main view-init tab tab-active view-apps-tab"
        data-url="/apps/"
      >
        <!-- Home page will be loaded here dynamically from /apps/ route -->
      </div>

      <!-- Device View -->
      <div
        id="view-device"
        class="view view-init tab view-device-tab"
        data-name="device"
        data-url="/device/"
      >
        <!-- Catalog page will be loaded here dynamically from /device/ route -->
      </div>

      <!-- Signer View -->
      <div
        id="view-signer"
        class="view view-init tab view-signer-tab"
        data-name="signer"
        data-url="/signer/"
      >
        <!-- Signer page will be loaded here dynamically from /device/ route -->
      </div>

      <!-- Settings View -->
      <div
        id="view-settings"
        class="view view-init tab view-settings-tab"
        data-name="settings"
        data-url="/settings/"
      >
        <!-- Settings page will be loaded here dynamically from /settings/ route -->
      </div>
    </div>

    <div class="login-screen banned-screen">
      <div class="view">
        <div class="page">
          <div class="page-content login-screen-content">
            <center class="block">
              <i class="f7-icons" style="font-size: 80px">nosign</i>
              <h2>Device banned</h2>
              <p>
                This device has been permanently banned due to unreasonable
                refunds or violations of the terms of service.
              </p>
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
`}}Q.id="bf3aa6e17a";var X=new te({name:"FlekSt0re",theme:"ios",el:"#app",component:Q,routes:ne});const ce=r=>{var t=window.location.search.substring(1),d=t.split("&"),n,l;for(l=0;l<d.length;l++)if(n=d[l].split("="),n[0]===r)return typeof n[1]===void 0?!0:decodeURIComponent(n[1]);return!1};localStorage.deal_id||X.request.json("https://flekstore.com/rest/device/getDealId/",{deal_code:ce("d")}).then(function(r){localStorage.deal_id=r.data.data});localStorage.client_uid||(localStorage.client_uid=""+Math.random().toString(36).substr(2,9)+Math.random().toString(36).substr(2,9)+(+new Date).toString(36));localStorage.layout||(localStorage.layout="dark");localStorage["color-theme"]||(localStorage["color-theme"]="#ffffff");E.addDefaultLocale(ae);window.timeAgo=new E("en-US");window.ClipboardJS=se;window.axisDateFormat=Intl.DateTimeFormat(void 0,{day:"numeric",month:"short",year:"numeric"});window.setColorTheme=r=>{document.documentElement.style.setProperty("--f7-theme-color",r["--f7-theme-color"]),document.documentElement.style.setProperty("--f7-theme-color-shade",r["--f7-theme-color-shade"]),document.documentElement.style.setProperty("--f7-theme-color-rgb",r["--f7-theme-color-rgb"]),document.documentElement.style.setProperty("--f7-theme-color-tint",r["--f7-theme-color-tint"])};window.onload=()=>{if(localStorage["color-theme"]==null)localStorage["color-theme"]="#393939";else{let r=localStorage["color-theme"];setColorTheme(X.utils.colorThemeCSSProperties(r))}localStorage.layout=="light"&&oe("html").removeClass("theme-dark")}});export default re();
