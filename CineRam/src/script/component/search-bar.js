class SearchBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
            background: rgba(0, 0, 0, 0.1);
            padding: 12px;
            border-radius: 12px;
            display: flex;
            position: sticky;
            margin: auto;
            margin-top: 50px;
            left: 0;
            top: 0;
            z-index: 100;
        }
        
        .search-container > input {
            width: 75%;
            padding: 16px;
            border: 2px;
            border-radius: 10px;
            border-bottom: 1px solid #000000;
            font-weight: bold;
            margin: 5px;
            flex-grow: 1;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 1px solid #000000;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: #000000;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 25%;
            cursor: pointer;
            margin: 5px;
            padding: 16px;
            background-color: rgb(255, 0, 0);
            color: white;
            border: 2px;
            border-bottom: 1px solid #000000;
            border-radius: 8px;
            text-transform: uppercase;
            flex-grow: 1;
        }
        
        .search-container > button:focus {
            outline-style: none;
            border: 1px solid #000000;
        }
        
        @media screen and (max-width: 550px){
            nav {
                flex-direction: row;
                position: static;
                justify-content: center;
                align-items: center;
            }
        
            .search-container {
                flex-direction: column;
                position: static;
                justify-content: center;
                align-items: center;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        </style>

        <div id="search-container" class="search-container">
            <input placeholder="Search Moive Name" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">SEARCH</button>
        </div>
        `;
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);