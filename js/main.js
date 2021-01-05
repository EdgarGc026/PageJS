$(document).ready(function () {
  console.log("Hola!");

  if (window.location.href.indexOf("index") > -1) {
    $(function () {
      $(".gallery").bxSlider({
        mode: "fade",
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: true,
      });
    });
  }

  /* Creando post */

  if (window.location.href.indexOf("index") > -1) {
    //La fecha interna sin algun plugin
    const date = new Date();
    month = date.toLocaleString("default", { month: "long" });
    let infoDate =
      "Publicado el dia " +
      date.getDay() +
      " " +
      month +
      " " +
      "del " +
      "" +
      date.getFullYear();
    console.log(infoDate);

    let textDescription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illum sunt placeat totam repellat inventore ipsam nostrum, distinctio quasi maxime officiis eveniet dignissimos voluptate quidem voluptates unde veniam nisi tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illum sunt placeat totam repellat inventore ipsam nostrum, distinctio quasi maxime officiis eveniet dignissimos voluptate quidem voluptates unde veniam nisi tempora.`;
    let posts = [
      {
        title: "Prueba del articulo 1",
        datetime: infoDate,
        description: textDescription,
      },
      {
        title: "Prueba del articulo 2",
        datetime: infoDate,
        description: textDescription,
      },
      {
        title: "Prueba del articulo 3",
        datetime: infoDate,
        description: textDescription,
      },
      {
        title: "Prueba del articulo 4",
        datetime: infoDate,
        description: textDescription,
      },
      {
        title: "Prueba del articulo 5",
        datetime: infoDate,
        description: textDescription,
      },
      {
        title: "Prueba del articulo 6",
        datetime: infoDate,
        description: textDescription,
      },
      {
        title: "Prueba del articulo 7",
        datetime: infoDate,
        description: textDescription,
      },
      {
        title: "Prueba del articulo 8",
        datetime: infoDate,
        description: textDescription,
      },
    ];
    // console.log(posts);

    posts.forEach((item, index) => {
      let postArticle = `
      <article class="post">
        <h2>${item.title}</h2>
        <span class='date'>${item.datetime}</span>
        <p class='description'>${item.description}</p>
      </article>
    `;
      // console.log(postArticle);

      $("#posts").append(postArticle);
    });
  }

  //Selector de temas
  let themes = $("#themes");

  //Para cambiar a verde
  $("#to-green").click(function () {
    themes.attr("href", "css/green.css");
  });

  //Para cambiar a azul
  $("#to-blue").click(function () {
    themes.attr("href", "css/blue.css");
  });

  //Para cambiar a rojo
  $("#to-red").click(function () {
    themes.attr("href", "css/red.css");
  });

  //Scroll arriba automatico
  $(".upTo").click(function (ev) {
    ev.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  //Simulacion del login
  $("#login form").submit(function () {
    //recoger los datos de cada input
    let form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  //
  let form_name = localStorage.getItem("form_name");
  if (form_name != null && form_name != undefined) {
    let about_parraph = $("#about p");
    $("#about p").html(`<strong>Bienvenido ${form_name}</strong> `);
    about_parraph.append(`<a href="#" id="logout">Cerrar sesion</a>`);
    $("#login").hide();

    //Si le doy click a logout, borras todas las variables que hay en la sesion
    //o local storage
    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  //Creacion del acordeon
  if (window.location.href.indexOf("about") > -1) {
    $("#acord").accordion();
  }

  //Reloj
  if (window.location.href.indexOf("clock") > -1) {
    setInterval(function () {
      let clock = moment().format("h:mm:ss a");
      $("#clock").html(clock);
    }, 1000);
  }

  //Validando el formulario
  if (window.location.href.indexOf("contact") > -1) {
    /* Que el calendario este en español */

    $.datepicker.regional["es"] = {
      closeText: "Cerrar",
      prevText: "< Ant",
      nextText: "Sig >",
      currentText: "Hoy",
      monthNames: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      monthNamesShort: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      dayNames: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ],
      dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Juv", "Vie", "Sáb"],
      dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
      weekHeader: "Sm",
      dateFormat: "dd/mm/yy",
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: "",
    };
    $.datepicker.setDefaults($.datepicker.regional["es"]);

    /* Cerrado, por si la cago */

    $("form input[name='birthday']").datepicker();

    $.validate({ lang: "en", errorMessagePosition: "top" });
  }
});
