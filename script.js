document.addEventListener("DOMContentLoaded", () => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  const team = [
    {name:"Carlos Henrique",image:"images/equipe_dev/carlos_henrique.jpeg",github:"https://github.com/carloshsv0411",linkedin:"https://www.linkedin.com/in/carloshenrique0411/",portfolio:""},
    {name:"Aira Soares",image:"images/equipe_dev/aira_soares.jpeg",github:"https://github.com/Airassilva",linkedin:"",portfolio:""},
    {name:"Carlos Eduardo",image:"images/equipe_dev/carlos_eduardo.jpeg",github:"https://github.com/carlaum167",portfolio:""},
    {name:"George Lucas",image:"images/equipe_dev/george_lucas.jpeg",github:"https://github.com/LucasNekoo",portfolio:""},
    {name:"Elcio José",image:"images/equipe_dev/elcio_jose.jpeg",github:"https://github.com/oElcio",portfolio:""},
    {name:"João Lucas Silva",image:"images/equipe_dev/joao_lucas_silva.jpeg",github:"https://github.com/Draculablack420",portfolio:""},
    {name:"Pedro Phelipe",image:"images/equipe_dev/pedro_phelipe.jpeg",github:"https://github.com/Segundoxs",portfolio:""},
    {name:"Jéssica Silva",image:"images/equipe_design/jessica_silva.jpeg",github:"https://github.com/js6462143-byte",linkedin:"https://www.linkedin.com/in/jéssica-silva-4093a1214?utm_source=share_via&utm_content=profile&utm_medium=member_ios",portfolio:""},
    {name:"Luísa Melo",image:"images/equipe_design/luisa_melo.jpeg",github:"https://github.com/luisamelo0",portfolio:""},
    {name:"Luiz Miranda",image:"images/equipe_design/luiz_miranda.jpeg",github:"https://github.com/luizlmorim",linkedin:"https://www.linkedin.com/in/luiz-miranda-236831202/",portfolio:""},
    {name:"Maria Regina",image:"images/equipe_design/maria_regina.jpeg",github:"https://github.com/Mariareginaalvesdasilva",portfolio:""},
    {name:"Pedro Santos",image:"images/equipe_design/pedro_santos.jpeg",github:"https://github.com/PedroSantos28",portfolio:""},
    {name:"Dennys Ricardo",image:"images/equipe_doc/dennys_ricardo.jpeg",github:"https://github.com/DennysRicardo007",linkedin:"https://www.linkedin.com/in/dennys-ricardo-55a051393?utm_source=share_via&utm_content=profile&utm_medium=member_android",portfolio:""},
    {name:"João Pedro",image:"images/equipe_doc/joao_pedro_soares.jpeg",github:"https://github.com/jpsoaress99",portfolio:""},
    {name:"Kauã Fernandes",image:"images/equipe_doc/kauã_fernandes.jpeg",github:"https://github.com/kauafernandecrtv-droid",linkedin:"https://www.linkedin.com/in/kauafernandess",portfolio:""},
    {name:"Maria Eduarda",image:"images/equipe_doc/maria_eduarda_ferreira.jpeg",github:"https://github.com/mariaeduardaferreiradon-afk",linkedin:"https://www.linkedin.com/in/eduardafnascimento?utm_source=share_via&utm_content=profile&utm_medium=member_android",portfolio:""},
    {name:"Ramon de Oliveira",image:"images/equipe_doc/ramon_de_oliveira.jpeg",github:"https://github.com/raq0215",portfolio:""},
    {name:"Gabriel Felipe",image:"images/equipe_qa/gabriel_felipe.jpeg",github:"https://github.com/gabrielfelipe480-Neos",portfolio:""},
    {name:"Heloisa Vieira",image:"images/equipe_qa/heloisa_vieira.jpeg",github:"https://github.com/mheloisa1",portfolio:""},
    {name:"Laura Sofia",image:"images/equipe_qa/laura_sofia.jpeg",github:"https://github.com/laura0xss",portfolio:""},
    {name:"Raquel Moreira",image:"images/equipe_qa/raquel_moreira.jpeg",github:"https://github.com/raq0215",portfolio:""},
    {name:"Eduardo Vieira",image:"images/equipe_dev/eduardo_vieira.jpg",github:"https://github.com/EduardoVieira-tec",portfolio:""},
    {name:"Raimundo Anthoni",image:"images/equipe_dev/Anthoni.jpeg",github:"https://github.com/anthonicruz",portfolio:""},
    {name:"Cauã Abraão",image:"images/equipe_qa/Cauã_Abraão.jpeg",github:"https://github.com/ocauandev",portfolio:""},
    {name:"Pedro Martinis",image:"images/equipe_design/Martins.jpeg",github:"https://github.com/Martinis001",portfolio:""},
    {name:"Alan Ferreira",image:"images/equipe_qa/Alan_Ferreira.jpeg",github:"https://github.com/alankauanferreira6-bot",portfolio:""},
    {name:"Beatriz Coutinho",image:"images/equipe_design/beatriz.jpeg",github:"https://github.com/beatriz123d",linkedin:"https://www.linkedin.com/in/beatriz-coutinho-2a0b60425/",portfolio:""}
  ];

  // A ordem foi organizada por narrativa: turma/apresentação → trabalho → descontração → vídeos.
  // Para arquivos com nomes diferentes, o carregador tenta variações antes de esconder o item.
  const gallery = [
    {type:"image", srcs:["bastidores/turma.jpg","bastidores/turminha.jpg"], caption:"Turma 125 reunida"},
    {type:"image", srcs:["bastidores/sala125.jpg"], caption:"Sala durante a formação da Turma 125"},
    {type:"image", srcs:["bastidores/meninos.jpg"], caption:"Integrantes da turma durante a apresentação"},
    {type:"image", srcs:["bastidores/galdino.jpg"], caption:"Turma reunida durante a formação"},
    {type:"image", srcs:["bastidores/aprmocau.jpg","bastidores/mocau.jpg"], caption:"Apresentação do projeto MOCAU"},
    {type:"image", srcs:["bastidores/mocau.jpg","bastidores/aprmocau.jpg"], caption:"Equipe apresentando o projeto MOCAU"},
    {type:"image", srcs:["bastidores/projeto.jpeg"], caption:"Equipe trabalhando no projeto"},
    {type:"image", srcs:["bastidores/projeto1.jpeg"], caption:"Momento de trabalho no projeto"},
    {type:"image", srcs:["bastidores/projeto2.jpeg"], caption:"Integrantes trabalhando juntos no projeto"},
    {type:"image", srcs:["bastidores/amigos.jpg"], caption:"Amigos reunidos durante a formação"},
    {type:"image", srcs:["bastidores/descontraidos.jpg","bastidores/descontraios.jpg","bastidores/descontraidos.jpeg","bastidores/descontraios.jpeg"], caption:"Momento descontraído entre os integrantes da turma"},
    {type:"image", srcs:["bastidores/turminha.jpg","bastidores/turma.jpg"], caption:"Integrantes da turma reunidos"},
    {type:"video", srcs:["bastidores/video.MOV"], caption:"Vídeo dos bastidores"},
    {type:"video", srcs:["bastidores/WhatsApp Video 2026-09-16 at 20.32.38.mp4"], caption:"Vídeo da Turma 125"}
  ];

  const projects = [
    {name:"Bingo JS",type:["mvp","jogo"],image:"images/projetos/bingo.jpg",github:"https://github.com/carlaum167/Bingo_Transforme-se",demo:"",desc:"Projeto desenvolvido em JavaScript, utilizando lógica de programação e interação com o usuário."},
    {name:"MOCAU",type:["mvp"],image:"images/projetos/mocau.jpg",github:"https://github.com/DennysRicardo007/UC-4",demo:"",desc:"Projeto desenvolvido pela turma durante nossa jornada de aprendizagem."},
    {name:"Roleta Infinita",type:["jogo"],image:"images/projetos/roleta-icon.svg",github:"https://github.com/LucasNekoo/roleta-infinita",demo:"https://lucasnekoo.github.io/roleta-infinita/",desc:"Jogo web desenvolvido em HTML, CSS e JavaScript, com categorias e uma dinâmica de roleta interativa."}
  ];

  const timeline = [
    ["01","Educação Financeira","Primeiro contato com conteúdos e conhecimentos da formação."],
    ["02","Descoberta","Exploração de ferramentas e conhecimentos de Office."],
    ["03","Lógica de Programação","Introdução à lógica e desenvolvimento com JavaScript."],
    ["04","MVP, Fluxos, Wireframes e Identidade","Planejamento, experiência, fluxos e construção das ideias."],
    ["05","Desenvolvimento e Projetos","Aplicação dos conhecimentos em HTML, CSS e projetos."]
  ];

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, {threshold:.12});

  $$(".reveal").forEach((el) => io.observe(el));

  const header = $(".topbar");
  const menu = $("#menu");
  menu.onclick = () => {
    const open = header.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
    menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menu.textContent = open ? "×" : "☰";
  };
  $$("nav a").forEach((a) => a.onclick = () => {
    header.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Abrir menu");
    menu.textContent = "☰";
  });

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[char]));
  }

  const galleryEl = $("#gallery");
  const galleryElements = [];

  function tryNextSource(element, index, candidates) {
    if (index >= candidates.length) {
      element.remove();
      return;
    }
    const media = element.querySelector("img, video");
    media.src = candidates[index];
    media.dataset.sourceIndex = String(index);
  }

  gallery.forEach((item, index) => {
    const figure = document.createElement("figure");
    figure.tabIndex = 0;
    figure.dataset.galleryIndex = String(index);

    if (item.type === "image") {
      figure.innerHTML = `<img src="${item.srcs[0]}" alt="${escapeHtml(item.caption)}" loading="lazy"><figcaption>${escapeHtml(item.caption)}</figcaption>`;
      const image = figure.querySelector("img");
      image.addEventListener("error", () => {
        const current = Number(image.dataset.sourceIndex || 0) + 1;
        if (current < item.srcs.length) tryNextSource(figure, current, item.srcs);
        else figure.remove();
      });
    } else {
      figure.innerHTML = `<video src="${item.srcs[0]}" muted playsinline preload="metadata" aria-label="${escapeHtml(item.caption)}"></video><span class="play" aria-hidden="true">▶</span><figcaption>${escapeHtml(item.caption)}</figcaption>`;
      const video = figure.querySelector("video");
      video.addEventListener("error", () => {
        const current = Number(video.dataset.sourceIndex || 0) + 1;
        if (current < item.srcs.length) tryNextSource(figure, current, item.srcs);
        else figure.remove();
      });
    }

    figure.onclick = () => openLightbox(index);
    figure.onkeydown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(index);
      }
    };

    galleryEl.appendChild(figure);
    galleryElements.push(figure);
  });

  const galleryToggle = $("#galleryToggle");
  const galleryPanel = $("#galleryPanel");
  galleryToggle.onclick = () => {
    const open = galleryToggle.getAttribute("aria-expanded") === "true";
    galleryToggle.setAttribute("aria-expanded", String(!open));
    galleryPanel.hidden = open;
    if (!open) setTimeout(() => galleryPanel.scrollIntoView({behavior:"smooth", block:"start"}), 40);
  };

  let speaking = false;
  $("#audio").onclick = () => {
    if (!("speechSynthesis" in window)) return;
    if (speaking) {
      speechSynthesis.cancel();
      speaking = false;
      $("#audio").setAttribute("aria-pressed", "false");
      $("#audio").textContent = "🔊 Áudio descrição";
    } else {
      const utterance = new SpeechSynthesisUtterance($("#audioText").textContent);
      utterance.lang = "pt-BR";
      utterance.onend = () => {
        speaking = false;
        $("#audio").setAttribute("aria-pressed", "false");
        $("#audio").textContent = "🔊 Áudio descrição";
      };
      speechSynthesis.speak(utterance);
      speaking = true;
      $("#audio").setAttribute("aria-pressed", "true");
      $("#audio").textContent = "■ Parar descrição";
    }
  };

  $("#timeline").innerHTML = timeline.map((item) => `
    <article class="timeline-item reveal">
      <strong class="timeline-num">${item[0]}</strong>
      <div><h3>${item[1]}</h3><p>${item[2]}</p></div>
      <span aria-hidden="true">↘</span>
    </article>
  `).join("");
  $$(".timeline-item").forEach((el) => io.observe(el));

  const projectsEl = $("#projects");
  function renderProjects(filter = "todos") {
    projectsEl.innerHTML = "";
    projects
      .filter((project) => filter === "todos" || project.type.includes(filter))
      .forEach((project, index) => {
        const el = document.createElement("article");
        el.className = "project reveal";
        el.innerHTML = `
          <div class="project-img">
            <img src="${project.image}" alt="Projeto ${escapeHtml(project.name)}" loading="lazy" onerror="this.style.display='none'">
          </div>
          <div class="project-body">
            <small>PROJETO 0${index + 1}</small>
            <h3>${escapeHtml(project.name)}<span>.</span></h3>
            <p>${escapeHtml(project.desc)}</p>
            <div class="project-links">
              <a href="${project.github}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub ↗</a>
              ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer">Jogar agora ↗</a>` : ""}
            </div>
          </div>`;
        projectsEl.appendChild(el);
        io.observe(el);
      });
  }
  renderProjects();
  $$(".filter").forEach((button) => button.onclick = () => {
    $$(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });

  $("#team").innerHTML = team.map((member) => {
    const portfolioLink = member.portfolio
      ? `<a class="portfolio-link" href="${member.portfolio}" target="_blank" rel="noopener noreferrer">Portfólio ↗</a>`
      : "";
    const linkedinLink = member.linkedin
      ? `<a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de ${escapeHtml(member.name)}"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i><span>LinkedIn</span></a>`
      : `<span class="social-disabled" aria-label="LinkedIn de ${escapeHtml(member.name)} ainda não informado"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i><span>LinkedIn</span></span>`;
    return `
      <article class="member reveal">
        <div class="member-photo">
          <img src="${member.image}" alt="Foto de ${escapeHtml(member.name)}" loading="lazy">
        </div>
        <div class="member-name"><h3>${escapeHtml(member.name)}</h3></div>
        <div class="member-links">
          <a href="${member.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub de ${escapeHtml(member.name)}"><i class="fa-brands fa-github" aria-hidden="true"></i><span>GitHub</span></a>
          ${linkedinLink}
          ${portfolioLink}
        </div>
      </article>`;
  }).join("");
  $$(".member").forEach((el) => io.observe(el));

  const lightbox = $("#lightbox");
  const lbImg = $("#lbImg");
  const lbVideo = $("#lbVideo");
  const lbCaption = $("#lbCaption");
  const lbCounter = $("#lbCounter");
  let current = 0;
  let lastFocused = null;

  function getValidSource(item) {
    return new Promise((resolve) => {
      let index = 0;
      const next = () => {
        if (index >= item.srcs.length) {
          resolve(null);
          return;
        }
        const src = item.srcs[index++];
        if (item.type === "image") {
          const test = new Image();
          test.onload = () => resolve(src);
          test.onerror = next;
          test.src = src;
        } else {
          const test = document.createElement("video");
          test.preload = "metadata";
          test.onloadedmetadata = () => resolve(src);
          test.onerror = next;
          test.src = src;
        }
      };
      next();
    });
  }

  async function show(index) {
    current = (index + gallery.length) % gallery.length;
    const item = gallery[current];
    lbImg.classList.remove("active");
    lbVideo.classList.remove("active");
    lbVideo.pause();
    lbVideo.removeAttribute("src");
    lbVideo.load();
    lbCounter.textContent = `${current + 1} / ${gallery.length}`;
    lbCaption.textContent = item.caption;

    const source = await getValidSource(item);
    if (!source) {
      lbCaption.textContent = `${item.caption} — arquivo não encontrado.`;
      return;
    }
    if (current !== index && gallery[current] !== item) return;

    if (item.type === "image") {
      lbImg.src = source;
      lbImg.alt = item.caption;
      lbImg.classList.add("active");
    } else {
      lbVideo.src = source;
      lbVideo.classList.add("active");
      lbVideo.load();
    }
  }

  function openLightbox(index) {
    lastFocused = document.activeElement;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lock");
    $("#lbClose").focus();
    show(index);
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lbVideo.pause();
    lbVideo.removeAttribute("src");
    lbVideo.load();
    document.body.classList.remove("lock");
    if (lastFocused) lastFocused.focus();
  }

  $("#lbClose").onclick = closeLightbox;
  $("#lbPrev").onclick = () => show(current - 1);
  $("#lbNext").onclick = () => show(current + 1);
  lightbox.onclick = (event) => { if (event.target === lightbox) closeLightbox(); };

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") show(current - 1);
    if (event.key === "ArrowRight") show(current + 1);
  });
});
