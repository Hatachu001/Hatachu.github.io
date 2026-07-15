const content = window.HATACHU_CONTENT;

document.title = `${content.name} | Links`;

document.querySelector("#profile-name").textContent = content.name;
document.querySelector(".handle").textContent = content.handle;

const bio = document.querySelector("#bio");
content.intro.forEach((line) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = line;
  bio.append(paragraph);
});

const profileLinks = document.querySelector("#profile-links");
content.profileLinks.forEach((item) => {
  const anchor = document.createElement("a");
  anchor.href = item.url;
  anchor.textContent = item.label;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  profileLinks.append(anchor);
});

const linksRoot = document.querySelector("#links");
content.sections.forEach((section) => {
  const sectionEl = document.createElement("section");
  sectionEl.className = "link-section";

  const heading = document.createElement("h2");
  heading.textContent = section.title;
  sectionEl.append(heading);

  const list = document.createElement("div");
  list.className = "link-list";

  section.links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = "link-card";
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.style.setProperty("--accent", link.color);
    anchor.setAttribute("aria-label", `${link.label}を開く`);
    if (link.iconWide) {
      anchor.classList.add("icon-wide");
    }

    const mark = document.createElement("span");
    mark.className = "link-mark";
    mark.setAttribute("aria-hidden", "true");

    if (link.icon) {
      const icon = document.createElement("img");
      icon.src = link.icon;
      icon.alt = "";
      icon.loading = "lazy";
      icon.decoding = "async";
      mark.classList.add("has-image");
      mark.append(icon);
    } else {
      mark.textContent = link.mark;
    }

    const text = document.createElement("span");
    text.className = "link-text";

    const label = document.createElement("strong");
    label.textContent = link.label;

    const display = document.createElement("span");
    display.textContent = link.display;

    text.append(label, display);
    anchor.append(mark, text);
    list.append(anchor);
  });

  sectionEl.append(list);
  linksRoot.append(sectionEl);
});
