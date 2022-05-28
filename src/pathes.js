let shimming = {
  ///// jQuery ////
  "jquery.ui": { deps: ["jquery"] },
  "jquery.easy.ui": {
    init: function () {
      srh.loadCss([
        "../lib_ext/jquery-easyui-1.5.1/themes/icon.css",
        "../lib_ext/jquery-easyui-1.5.1/themes/default/easyui.css"
      ]);
    }
  },
  "jquery.cookie": { deps: ["jquery"] },
  "jquery.rating": {
    init: function () {
      srh.loadCss(["../lib_ext/star-rating-v4.11/jquery.rating.css"]);
    }
  },
  ///// Lib divers  /////
  dynatree: {
    init: function () {
      srh.loadCss(["../lib_ext/srh-css/srh.dynatree.css"]);
    }
  },
  highcharts: { exports: "Highcharts", deps: ["highstock"] },
  "highcharts-3d": { exports: "Highcharts-3d", deps: ["highstock"] },
  "highstock.export": { deps: ["highstock"] },
  "highstock.drilldown": { deps: ["highstock"] },
  "highstock.data": { deps: ["highstock"] },
  "highstock.solid-gauge": { deps: ["highstock"] },
  jqxgrid: {
    deps: [
      "jquery",
      "jqxcore",
      "jqxgrid.columnsresize",
      "jqxgrid.columnsreorder",
      "jqxgrid.filter",
      "jqxgrid.edit",
      "jqxgrid.grouping",
      "jqxgrid.pager",
      "jqxgrid.selection",
      "jqxgrid.sort",
      "jqxgrid.aggregates"
    ]
  },
  selectbox: { deps: ["jquery"] },
  "slickgrid.event.drag": { deps: ["jquery"] },
  "slick.grid": {
    deps: ["jquery", "slick.core", "slickgrid.event.drag"],
    init: function () {
      srh.loadCss([
        "../lib_ext/SlickGrid-2.3.2/slick.grid.css",
        "../lib_ext/srh-css/srh.slickgrid.css"
      ]);
    }
  },

  ///// ADE 2018/02/15 - Intégration de VueJS (test) /////
  csVueComponents: { deps: ["vuex"] },
  vuex: { deps: ["vue"] },
  vue: { deps: [] },
  "srh.vueapp": { deps: [] },
  // "vue-search-bar":			{"deps": ["srh.vueapp"]},  // TRH-9658  replacer par searchbar
  searchbar: { deps: ["srh.vueapp", "annuaire"] },
  "vue-favoris-combo": { deps: ["srh.vueapp"] },
  "vue-liste": { deps: ["srh.vueapp"] },
  testVue: { deps: ["srh.vueapp", "evaluationsRecap", "evaluationsContexte"] }, // TRH-7049
  catalogue: { deps: ["srh.vueapp"] },
  formationPrev: { deps: ["srh.vueapp"] }, // RDFORM-12
  formationPrevEqp: { deps: ["srh.vueapp"] }, // RDFORM-12
  evaluations: {
    deps: [
      "srh.vueapp",
      "evaluationsCampaigns",
      "evaluationsSals",
      "evaluationsProcessSal",
      "demandeFormation",
      "evaluationsDashboard"
    ]
  },
  evaluationsCampaigns: { deps: ["srh.vueapp"] },
  evaluationsSals: { deps: ["srh.vueapp"] },
  evaluationsProcessSal: {
    deps: [
      "srh.vueapp",
      "evaluationsStep",
      "evaluationsStepPro",
      "evaluationsRecap",
      "evaluationsContexte",
      "demandeFormation",
      "evaluationsStepDemCli"
    ]
  },
  evaluationsStepDemCli: { deps: ["srh.vueapp", "evaluationsStepDemCliTab"] },
  evaluationsRecap: { deps: ["srh.vueapp"] },
  evaluationsContexte: { deps: ["srh.vueapp"] }, // TRH-7049
  evaluationsStep: { deps: ["srh.vueapp"] },
  evaluationsStepPro: { deps: ["srh.vueapp"] }, // TRH-7049
  evaluationsDashboard: { deps: ["srh.vueapp"] }, // RDGPEC-26
  traitementco: {
    deps: ["srh.vueapp", "traitementcoList", "traitementcoProcess"]
  },
  traitementcoList: { deps: ["srh.vueapp"] },
  traitementcoProcess: {
    deps: [
      "srh.vueapp",
      "traitementcoSals",
      "traitementcoTraitement",
      "traitementcoForm"
    ]
  },
  traitementcoSals: { deps: ["srh.vueapp", "srh.org", "srh.horg", "gta.proj"] },
  traitementcoTraitement: { deps: ["srh.vueapp"] },
  traitementcoForm: { deps: ["srh.vueapp", "objecteditor"] },
  augmentations: { deps: ["srh.vueapp", "ficheSalarie"] },
  ficheSalarie: { deps: ["srh.vueapp"] },
  saisieAugmentations: { deps: ["srh.vueapp", "srh.org", "srh.horg"] },
  validationAugmentations: { deps: ["srh.vueapp"] },
  repartitionAugmentations: { deps: ["srh.vueapp"] },
  reportingAugmentations: {
    deps: [
      "srh.vueapp",
      "highcharts",
      "highstock.drilldown",
      "highstock.data",
      "highstock.export",
      "srh.highcharts.init"
    ]
  },
  suiviDemAugmentations: { deps: ["srh.vueapp"] },
  adminDashboard: { deps: ["srh.vueapp"] },
  agDashboard: { deps: ["srh.vueapp"] },
  propositionAugmentations: { deps: ["srh.vueapp"] },
  infoPratique: { deps: ["srh.vueapp"] },
  "arkevia.cnxinfo": { deps: ["srh.vueapp"] },
  evpCollectives: {
    deps: ["srh.vueapp", "srh.org", "srh.horg", "evp.main", "srh.evptool"]
  },
  demandeFormation: { deps: ["srh.vueapp", "srh.org", "srh.horg"] },
  absCollectives: {
    deps: [
      "srh.vueapp",
      "srh.org",
      "srh.horg",
      "evp.main",
      "srh.evptool",
      "srh.gta",
      "srh.conges",
      "jqxcombobox",
      "srh.saisieabs"
    ]
  },
  planning: { deps: ["srh.vueapp", "srh.conges"] },
  dispMode: { deps: ["srh.vueapp", "modal"] },
  bryntumScheduler: { deps: ["srh.vueapp"] },
  //"schedulerConfig":         	{"deps": ["srh.vueapp","modal"]},
  sAgenda: {
    deps: [
      "srh.vueapp",
      "bryntumScheduler",
      "dispMode",
      "dateNavBar",
      "vacanceZone"
    ]
  },
  "store-absences": { deps: ["srh.conges"] },
  ///// Lib SRH /////
  "srh.comp": { deps: ["jqxcombobox", "srh.jqxgrid"] },
  cshiersal: {
    deps: [
      "cswait",
      "jqxcore",
      "jqxtabs",
      "jqxgrid",
      "jqxinput",
      "jqxdropdownbutton",
      "jqxcheckbox",
      "jqxdropdownlist",
      "jqxdatetimeinput",
      "jqxtreegrid",
      "jqxtooltip",
      "jqxtree"
    ]
  },
  objecteditor: {
    deps: [
      "jqxcheckbox",
      "jqxcombobox",
      "jqxdatetimeinput",
      "jqxdropdownlist",
      "jqxinput",
      "jqxmaskedinput",
      "jqxnotification",
      "jqxnumberinput",
      "jqxpanel",
      "jqxpasswordinput",
      "jqxradiobutton",
      "jqxrating",
      "jqxslider",
      "jqxtabs",
      "jqxtooltip",
      "jqxwindow"
    ]
  },
  csfileupload: {
    init: function () {
      srh.loadCss(["css/srh.csFileUpload.css"]);
    }
  },
  "srh.ajax": { deps: ["base64", "deflate"] },
  "srh.db": { deps: ["srh.workflow"] }, //todo juste pour annulation a déplacer peut etre
  "srh.evptool": { deps: ["srh.gta", "srh.astreintes", "gta.proj"] },
  "srh.grid": {
    deps: [
      "slick.grid",
      "slick.rowselectionmodel",
      "slick.checkboxselectcolumn",
      "slick.srhgroupevolved",
      "slick.cellrangeselector",
      "slick.cellrangedecorator",
      "slick.dataview",
      "slick.groupitemmetadataprovider",
      "slick.editors"
    ]
  },
  "srh.horg": { deps: ["dynatree"] },
  "srh.highcharts.init": {
    deps: [
      "jquery",
      "highcharts",
      "highcharts-3d",
      "highstock.export",
      "highstock.drilldown",
      "highstock.data",
      "highstock.solid-gauge"
    ]
  },
  "srh.jqxgrid": { deps: ["jquery", "jqxcore", "jqxgrid"] },
  "srh.jqxhorg": {
    deps: [
      "srh.jqxsplit",
      "srh.jqxtabs",
      "srh.jqxtreegrid",
      "jqxcombobox",
      "jqxdatetimeinput",
      "jqxgrid",
      "jqxinput",
      "jqxmenu",
      "jqxtree"
    ]
  },
  "srh.jqxorg": { deps: ["srh.org", "srh.jqxtreegrid"] },
  "srh.jqxsplit": { deps: ["jqxsplitter"] },
  "srh.jqxtabs": { deps: ["jqxtabs"] },
  "srh.jqxtreegrid": { deps: ["jqxtreegrid"] },
  "srh.org": { deps: ["dynatree"] },
  "srh.pwdreg": { deps: ["srh.ui.comp"] },
  "srh.status": { deps: ["srh.maintenance"] },
  "srh.tools": {
    deps: ["jqxprogressbar", "jqxwindow", "jqxresponse", "cswait"]
  },
  "srh.traitement": { deps: ["jqxgrid", "jqxwindow", "cshiersal"] },
  "srh.ui": { deps: ["jquery", "csalert", "jqxdatetimeinput", "srh.comp"] },
  "srh.ui.data.analysis": {
    deps: [
      "csbreadcrumb",
      "csorg",
      "jqxchart",
      "jqxdropdownlist",
      "jqxgrid",
      "jqxbuttons"
    ]
  },
  "srh.ui.accordion": { deps: ["jqxmenu", "vue-search-bar"] },
  "srh.ui.comp": {
    deps: [
      "srh.ui",
      "dynatree",
      "srh.horg",
      "srh.org",
      "srh.jqxgrid",
      "jqxtooltip",
      "jqxtreegrid"
    ]
  },
  "srh.workflow": { deps: ["srh.evptool"] },
  "srh.workflow.ui": {
    deps: [
      "srh.workflow",
      "srh.status",
      "cswait",
      "srh.esafe",
      "docadm.main",
      "srh.jqxgrid",
      "jqxgrid",
      "jqxwindow"
    ]
  },

  //ecran ( attention dans un modele MVC , permet de charger les composant graphiques associés)
  "acomptes.main": { deps: ["srh.evptool"] },
  annuaire: { deps: ["srh.conges", "srh.gta"] },
  blog: { deps: ["srh.vueapp", "jqxcombobox", "jqxeditor"] },
  "cet.main": { deps: ["srh.evptool", "srh.conges"] },
  "control.main": { deps: ["srh.ui.comp"] },
  "covalid.main": { deps: ["srh.horg"] },
  "docadm.main": { deps: ["srh.ui.comp"] },
  "emb.main": { deps: ["srh.ui", "sse.main", "isotope", "srh.esafe"] },
  init_onboarding: { deps: ["srh.vueapp"] },
  suivi_onboarding: { deps: ["srh.vueapp"] },
  hist_onboarding: { deps: ["srh.vueapp"] },
  "onboarding.main": {
    deps: [
      "srh.ui",
      "sse.main",
      "isotope",
      "srh.esafe",
      "hist_onboarding",
      "init_onboarding",
      "suivi_onboarding",
      "srh.vueapp"
    ]
  },
  "evp.main": {
    deps: ["jqxvalidator", "srh.ui.comp", "srh.evptool", "jqxcombobox"]
  },
  "formation.main": {
    deps: [
      "cswait",
      "srh.org",
      "srh.horg",
      "srh.conges",
      "csfileupload",
      "objecteditor",
      "jqxcheckbox",
      "jqxcombobox",
      "jqxdatetimeinput",
      "jqxdropdownlist",
      "srh.jqxgrid",
      "jqxinput",
      "jqxnumberinput",
      "jqxpanel",
      "jqxsplitter",
      "jqxtabs",
      "jqxtooltip",
      "jqxtree",
      "jqxwindow"
    ]
  },
  //"formation.demande":        {"deps": ["cswait","srh.jqxtreegrid","jqxcheckbox","jqxcombobox","srh.jqxgrid","jqxinput","jqxnavigationbar","jqxtabs","jqxtooltip","jqxtreegrid","jqxpanel","jqxsplitter","jqxtree"]},
  "formation.catalogue": {
    deps: [
      "catalogue",
      "formation.main",
      "srh.vueapp",
      "srh.jqxtreegrid",
      "jqxnavigationbar",
      "jqxtooltip",
      "jqxtreegrid",
      "jqxtree"
    ]
  },
  "formation.demande": {
    deps: [
      "formation.main",
      "srh.jqxtreegrid",
      "jqxnavigationbar",
      "jqxtooltip",
      "jqxtreegrid",
      "jqxtree"
    ]
  },
  "formation.inscription": {
    deps: ["srh.jqxgrid", "cswait", "jqxinput", "jqxtabs"]
  },
  "formation.questionnaire": {
    deps: [
      "jqxbuttons",
      "cswait",
      "jqxcombobox",
      "jqxdropdownlist",
      "srh.jqxgrid",
      "jqxinput",
      "jqxchart",
      "jqxpanel",
      "jqxsplitter",
      "jqxtabs",
      "jqxvalidator",
      "jqxgauge"
    ]
  },
  "formation.suivi": {
    deps: [
      "formation.main",
      "srh.jqxgrid",
      "jqxpanel",
      "jqxsplitter",
      "jqxtree"
    ]
  },
  "ged.main": {
    deps: [
      "objecteditor",
      "jqxcombobox",
      "jqxdropdownbutton",
      "jqxnavigationbar",
      "srh.jqxgrid",
      "jqxgrid",
      "srh.esafe"
    ]
  },
  "gpec.main": {
    deps: [
      "srh.compcplx",
      "gpec.tools",
      "cswait",
      "srh.ui.comp",
      "jqxexpander",
      "jqxtreegrid",
      "jqxgrid",
      "jqxtabs",
      "jqxpanel",
      "srh.evptool",
      "jqxsplitter",
      "jqxcombobox",
      "jqxprogressbar",
      "jqxradiobutton",
      "jqxwindow",
      "jqxtree",
      "jqxcheckbox",
      "jqxsplitter",
      "jqxtooltip",
      "srh.highcharts.init",
      "jqxchart",
      "jquery.rating"
    ]
  },
  "gpec.competences": { deps: ["gpec.tools", "jquery.easy.ui"] },
  "gpec.demclients": { deps: ["gpec.tools"] },
  "gpec.formations": { deps: ["gpec.tools"] },
  "gpec.objectifs": { deps: ["gpec.tools"] },
  "gpec.workflow": { deps: ["gpec.tools"] },
  "gpec.tools": { deps: [] },
  "notefraisAMD.view": { deps: ["srh.jqxgrid"] },
  "notefraisAMD.main": { deps: [] },
  "pibAMD.view": { deps: ["srh.jqxgrid", "jqxcombobox"] },
  "sse.main": {
    deps: [
      "srh.ui.comp",
      "srh.esafe",
      "jqxmaskedinput",
      "isotope",
      "popupIndivTemps"
    ]
  },
  "srh.analyse": {
    deps: ["srh.gta", "cswait", "csorg", "srh.ui.data.analysis"]
  },
  "srh.calendar": { deps: ["srh.gta"] },
  "srh.conges": {
    deps: [
      "srh.gta",
      "srh.esafe",
      "srh.soldes",
      "srh.evptool",
      "srh.calendar",
      "srh.highcharts.init"
    ]
  },
  "srh.esafe": { deps: ["srh.ui.comp", "csfileupload", "objecteditor"] },
  "srh.planning": {
    deps: ["srh.gta", "srh.horg", "srh.conges", "srh.soldes", "srh.astreintes"]
  },
  "srh.saisieabs": {
    deps: ["srh.gta", "srh.evptool", "srh.conges", "jqxcombobox"]
  },
  "srh.soldes": { deps: ["srh.gta", "srh.evptool"] }, //attention a besoin de srh.conges mais on ne peut le mettre r?cursif
  "tdb.main": { deps: ["jqxchart", "srh.jqxgrid", "jqxdatetimeinput"] },

  ///// GTA /////
  "gta.annualisation": {
    deps: [
      "srh.gta",
      "srh.org",
      "srh.highcharts.init",
      "srh.ui.comp",
      "jqxgrid",
      "jqxresponse",
      "jqxtooltip",
      "jqxwindow"
    ]
  },
  "gta.cld": {
    deps: ["srh.gta", "srh.grid", "gta.proj", "jqxcombobox", "gta.items"]
  },
  "gta.correctano": {
    deps: [
      "srh.gta",
      "srh.evptool",
      "gta.items",
      "srh.conges",
      "jqxgrid",
      "jqxcombobox",
      "jqxwindow"
    ]
  },
  "gta.cumuls": {
    deps: ["srh.gta", "srh.horg", "srh.jqxgrid", "jqxdatetimeinput"]
  },
  "cumuls.main": {
    deps: [
      "srh.ui",
      "srh.ui.comp",
      "srh.horg",
      "srh.jqxgrid",
      "jqxdatetimeinput",
      "srh.soldes",
      "srh.conges"
    ]
  },
  "gta.detailjour": {
    deps: [
      "srh.gta",
      "srh.evptool",
      "srh.astreintes",
      "srh.grid",
      "gta.proj",
      "srh.conges",
      "srh.ui.comp"
    ]
  },
  "gta.demevgta": {
    deps: [
      "srh.gta",
      "srh.evptool",
      "jqxcheckbox",
      "jqxdatetimeinput",
      "jqxgrid",
      "jqxtooltip",
      "jqxwindow"
    ]
  },
  "gta.gestionano": {
    deps: [
      "cswait",
      "srh.gta",
      "jqxdatetimeinput",
      "gta.detailjour",
      "srh.jqxgrid",
      "srh.ui.comp"
    ]
  },
  "gta.items": {
    deps: [
      "srh.gta",
      "srh.evptool",
      "jqxbuttons",
      "jqxcombobox",
      "jqxdatetimeinput",
      "jqxdropdownlist",
      "jqxslider",
      "srh.ui.comp"
    ]
  },
  "gta.listeano": {
    deps: ["srh.gta", "cswait", "srh.ui.comp", "jqxdatetimeinput"]
  },
  "gta.plandem": {
    deps: [
      "srh.gta",
      "cswait",
      "srh.evptool",
      "gta.items",
      "jqxdatetimeinput",
      "jqxdropdownlist",
      "jqxgrid",
      "jqxtooltip",
      "jqxwindow",
      "jqxtextarea",
      "jqxvalidator"
    ]
  },
  "gta.plannifmasse": {
    deps: [
      "srh.gta",
      "srh.evptool",
      "srh.saisieabs",
      "gta.items",
      "srh.compcplx"
    ]
  },
  "gta.planning-annuel": { deps: ["srh.gta", "srh.astreintes", "srh.conges"] },
  "gta.planning-co": {
    deps: [
      "gta.cld",
      "srh.astreintes",
      "srh.saisieabs",
      "srh.ui.comp",
      "srh.conges",
      "slick.grid",
      "slick.rowselectionmodel",
      "slick.checkboxselectcolumn",
      "slick.srhgroupevolved",
      "slick.cellrangeselector",
      "slick.cellrangedecorator",
      "slick.dataview",
      "slick.groupitemmetadataprovider",
      "slick.editors",
      "vue-favoris-combo"
    ]
  },
  "plannJours.main": {
    deps: [
      "srh.gta",
      "srh.astreintes",
      "srh.highcharts.init",
      "jqxdropdownlist",
      "jqxresponse",
      "jqxslider",
      "jqxbuttons",
      "gta.items",
      "srh.conges",
      "gta.proj",
      "jqxtreegrid",
      "vue-favoris-combo"
    ]
  },
  "plannMetier.main": {
    deps: [
      "srh.gta",
      "srh.astreintes",
      "jqxsplitter",
      "jqxdropdownlist",
      "jqxresponse",
      "jqxslider",
      "jqxbuttons",
      "gta.items",
      "srh.conges",
      "gta.proj",
      "jqxtreegrid",
      "srh.compcplx"
    ]
  },
  "gta.pointvirt": { deps: ["srh.gta", "srh.jqxgrid", "jqxtooltip"] },
  "gta.productivite": {
    deps: [
      "srh.gta",
      "jqxdatetimeinput",
      "srh.jqxgrid",
      "srh.ui.comp",
      "srh.conges",
      "cswait"
    ]
  },
  "gta.proj.mgt": {
    deps: [
      "gta.proj",
      "objecteditor",
      "srh.horg",
      "srh.ui.comp",
      "cswait",
      "jqxcombobox",
      "jqxdatatable",
      "jqxdropdownlist",
      "jqxinput",
      "jqxlistbox",
      "jqxnumberinput",
      "jqxpanel",
      "jqxsplitter",
      "jqxswitchbutton",
      "jqxtabs",
      "jqxtooltip"
    ]
  },
  "gta.saisieactivitesexcep": {
    deps: [
      "srh.gta",
      "srh.evptool",
      "srh.saisieabs",
      "gta.items",
      "gta.plannifmasse",
      "srh.compcplx"
    ]
  },
  "gta.saisieastreintes": {
    deps: [
      "srh.gta",
      "srh.astreintes",
      "srh.evptool",
      "srh.saisieabs",
      "srh.ui.comp",
      "gta.proj",
      "jqxcombobox"
    ]
  },
  "gta.pretpersonnel": {
    deps: [
      "srh.gta",
      "jqxdatetimeinput",
      "srh.jqxgrid",
      "srh.ui.comp",
      "jqxwindow",
      "jqxvalidator",
      "cswait",
      "srh.compcplx",
      "jqxpopover"
    ]
  },
  "gta.ventil": {
    deps: ["srh.gta", "jqxdatetimeinput", "srh.jqxgrid", "srh.horg", "srh.org"]
  },

  "pho.view": { deps: ["srh.gta", "srh.jqxgrid"] },

  ///// jQwidget /////
  "globalize.fr-FR": { deps: ["globalize"] },
  "globalize.en-US": { deps: ["globalize"] },
  "globalize.de-DE": { deps: ["globalize"] },
  "globalize.es-ES": { deps: ["globalize"] },
  "globalize.it-IT": { deps: ["globalize"] },
  "globalize.cs-CZ": { deps: ["globalize"] },
  "globalize.nl-NL": { deps: ["globalize"] },
  "globalize.pl-PL": { deps: ["globalize"] },
  "globalize.pt-PT": { deps: ["globalize"] },
  "globalize.ro-RO": { deps: ["globalize"] },
  jqxcheckbox: { deps: ["jquery", "jqxcore"] },
  jqxbuttons: { deps: ["jquery", "jqxcore"] },
  jqxcalendar: { deps: ["jquery", "jqxcore"] },
  jqxdatetimeinput: { deps: ["jquery", "jqxcore", "jqxcalendar"] },
  jqxcombobox: {
    deps: ["jquery", "jqxcore", "jqxscrollbar", "jqxbuttons", "jqxlistbox"]
  },
  jqxcolorpicker: { deps: ["jquery", "jqxcore"] },
  jqxcore: { deps: ["jquery"] },
  jqxdata: { deps: ["jquery", "jqxcore"] },
  jqxdatatable: {
    deps: [
      "jquery",
      "jqxcore",
      "jqxdata",
      "jqxbuttons",
      "jqxscrollbar",
      "jqxlistbox",
      "jqxdropdownlist"
    ]
  },
  jqxdropdownlist: {
    deps: ["jquery", "jqxcore", "jqxscrollbar", "jqxbuttons"]
  },
  jqxeditor: {
    deps: [
      "jquery",
      "jqxcore",
      "jqxbuttons",
      "jqxscrollbar",
      "jqxlistbox",
      "jqxcombobox",
      "jqxdropdownlist",
      "jqxdropdownbutton",
      "jqxcolorpicker",
      "jqxwindow",
      "jqxtooltip",
      "jqxcheckbox"
    ]
  },
  jqxexpander: { deps: ["jquery", "jqxcore"] },
  "jqxgrid.org": {
    deps: [
      "jquery",
      "jqxcore",
      "jqxdata",
      "jqxbuttons",
      "jqxscrollbar",
      "jqxmenu",
      "jqxscrollbar",
      "jqxlistbox",
      "jqxdropdownlist",
      "jqxcheckbox"
    ]
  },
  "jqxgrid.columnsresize": { deps: ["jquery", "jqxcore", "jqxgrid.org"] },
  "jqxgrid.columnsreorder": { deps: ["jquery", "jqxcore", "jqxgrid.org"] },
  "jqxgrid.edit": { deps: ["jquery", "jqxcore", "jqxgrid.org"] },
  "jqxgrid.filter": { deps: ["jquery", "jqxcore", "jqxgrid.org"] },
  "jqxgrid.grouping": { deps: ["jquery", "jqxcore", "jqxgrid.org"] },
  "jqxgrid.pager": { deps: ["jquery", "jqxcore", "jqxgrid.org"] },
  "jqxgrid.selection": { deps: ["jquery", "jqxcore", "jqxgrid.org"] },
  "jqxgrid.sort": { deps: ["jquery", "jqxcore", "jqxgrid.org"] },
  "jqxgrid.aggregates": { deps: ["jquery", "jqxcore", "jqxgrid.org"] },
  jqxinput: { deps: ["jquery", "jqxcore"] },
  jqxformattedinput: { deps: ["jquery", "jqxcore"] },
  jqxlistbox: { deps: ["jquery", "jqxcore", "jqxscrollbar", "jqxbuttons"] },
  jqxmaskedinput: { deps: ["jquery", "jqxcore"] },
  jqxmenu: { deps: ["jquery", "jqxcore"] },
  jqxnavigationbar: { deps: ["jquery", "jqxcore"] },
  jqxnumberinput: { deps: ["jquery", "jqxcore"] },
  jqxnotification: { deps: ["jquery", "jqxcore"] },
  jqxpanel: { deps: ["jquery", "jqxcore", "jqxscrollbar", "jqxbuttons"] },
  jqxpasswordinput: { deps: ["jquery", "jqxcore"] },
  jqxradiobutton: { deps: ["jquery", "jqxcore"] },
  jqxrating: { deps: ["jquery", "jqxcore"] },
  jqxscrollbar: { deps: ["jquery", "jqxcore"] },
  jqxslider: { deps: ["jquery", "jqxcore", "jqxbuttons"] },
  jqxsplitter: { deps: ["jquery", "jqxcore", "jqxbuttons"] },
  jqxswitchbutton: { deps: ["jquery", "jqxcore"] },
  jqxpopover: { deps: ["jquery", "jqxcore"] },
  jqxresponse: { deps: ["jquery", "jqxcore"] },
  jqxtabs: { deps: ["jquery", "jqxcore"] },
  jqxtooltip: { deps: ["jquery", "jqxcore"] },
  jqxwindow: { deps: ["jquery", "jqxcore"] },
  jqxprogressbar: { deps: ["jquery", "jqxcore"] },
  jqxchart: {
    deps: ["jquery", "jqxcore", "jqxchart.core", "jqxdraw", "jqxdata"]
  },
  jqxtreegrid: {
    deps: [
      "jquery",
      "jqxcore",
      "jqxdata",
      "jqxbuttons",
      "jqxscrollbar",
      "jqxlistbox",
      "jqxdropdownlist",
      "jqxdatatable"
    ]
  },
  jqxtree: {
    deps: [
      "jqxtree.org",
      "jquery",
      "jqxcore",
      "jqxbuttons",
      "jqxscrollbar",
      "jqxpanel"
    ]
  },
  jqxdraw: { deps: ["jquery", "jqxcore"] }
};
exports.default = shimming;
