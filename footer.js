const footerData = [
    {
        header: "Online Store",
        children: [
            { title: "Men Clothing", link: "/" },
            { title: "Women Clothing", link: "/" },
            { title: "Men Accessories", link: "/" },
            { title: "Women Accessories", link: "/" }
        ]
    },
    {
        header: "helpful link",
        children: [
            { title: "Home", link: "/" },
            { title: "About", link: "/" },
            { title: "Contact", link: "/" },
        ]
    },
    {
        header: "Address",
        children: [
            { title: "Belbari-11,Morang,Nepal", link: "/" },
        ]
    }
];

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
