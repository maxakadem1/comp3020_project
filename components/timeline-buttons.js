class TimelineButtons extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `            
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group-small mr-2 " role="group">
                    <button type="button" id="week-btn" class="btn btn-outline-dark btn-light">Week</button>
                    <button type="button" id="month-btn" class="btn btn-outline-dark btn-light">Month</button>
                    <button type="button" id="year-btn" class="btn btn-outline-dark btn-light">Year</button>
                </div>
            </div>
        `;
    }
}

customElements.define('timeline-buttons-component', TimelineButtons);