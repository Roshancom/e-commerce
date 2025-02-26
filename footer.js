import { footerData } from "./data.js";

const footerDiv = document.getElementById("footer");

const getChildren = (data) => {
    return data.map(el => `<a href="${el.link}"><p>${el.title}</p></a>`).join("");
};

const footer = `
    <footer>
        <section>    
            <div id="containerFooter">
                ${footerData.map(el => `
                    <div class="webFooter">
                        <h3>${el.header}</h3>
                        ${getChildren(el.children)}
                    </div>
                `).join("")}
            </div>
            <div id="credit">
                <a href="https://www.linkedin.com/in/roshan-neupane-945209272/">© Roshan Neupane</a>
            </div>
        </section>
    </footer>
`;

footerDiv.innerHTML = footer;
