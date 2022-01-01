class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">

                <a class="navbar-brand" href="index.html">GStat</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="playtime.html">Playtime</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="spending.html">Spending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="globalRanking.html">Rankings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="tags.html" >Tags</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="library.html">Library</a>
                        </li>

                        <style>
                          .center {
                            position: relative;
                          }

                          .vline {
                            margin: 0;
                            position: absolute;
                            top: 20%;
                            border-left: 1px solid #7e8083;
                            height: 1.5rem;
                          }
                        </style>

                        <div class="center">
                          <div class ="vline"></div>
                        </div>

<!--
                        <div style="
                        border-left:1px solid #7e8083; height:1.5rem;top: 50%;left: 50%
                        margin: 0;
                        position: relative;
                        top: 50%;
                        left: 50%;
                        -ms-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);

                        "></div>
-->
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#goalsModal" onclick='fetchFields()'>Goals</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                      <div class = "btn-group">
                        <li class="nav-item">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img id="profile-pic" src="../images/profile_pic.jpg"> </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <div class="dropdown-divider"></div>
                                <li><a class="dropdown-item" href="signin.html">Sign Out</a></li>
                            </ul>
                        </li>
                      </div>
                    </ul>
                </div>

            </div>
        </nav>
            </div>

            <div class="modal fade" id="goalsModal" tabindex="-1" aria-labelledby="Goals" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel">Goals</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <h5>Spending Budget:</h5>
                    <div class="progress" style="height: 30px";>
                      <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id = "spendingGoalProgressBar"><p id = "spendingGoalText"></p></div>
                    </div>
                    <br>
                    <h6>Set your Budget</h6>
                    <div class="form-group row input-title">
                      <div class="col-3">
                        <label>Starting Week</label>
                        <input type="number" class="form-control" id="spendingStartWeek">
                      </div>

                      <div class="col-3">
                        <label>Goal Length (Weeks)</label>
                        <input type="number" class="form-control" id="spendingSpan">
                      </div>

                      <div class="col-2">
                        <label>Budget ($)</label>
                        <input type="number" class="form-control" id="spendingGoalNumber">
                      </div>
                    </div>
                    <br>
                    <p id = 'spendingGoalDescription'></p>
                      <br>
                    <h5>Playtime Budget:</h5>
                    <div class="progress" style="height: 30px";>
                      <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id = "ptGoalProgressBar"><p id = "ptGoalText"></p></div>
                    </div>
                    <br>
                    <h6>Set your Budget</h6>
                    <div class="form-group row input-title">
                      <div class="col-3">
                        <label>Starting Week</label>
                        <input type="number" class="form-control" id="ptStartWeek">
                      </div>

                      <div class="col-3">
                        <label>Goal Length (Weeks)</label>
                        <input type="number" class="form-control" id="ptSpan">
                      </div>

                      <div class="col-2">
                        <label>Limit (Hours)</label>
                        <input type="number" class="form-control" id="ptGoalNumber">
                      </div>
                    </div>
                    <br>
                    <p id = 'ptGoalDescription'></p>


                  </div>
                  <div class="modal-footer">
                    <p id = "goalSaveMessage"></p>
                    <button type="button" class="btn btn-secondary-surface" data-bs-dismiss="modal" onclick="emptyFields()">Close</button>
                    <button type="button" class="btn btn-primary-surface" onclick="goalSave()">Save changes</button>
                  </div>
                </div>
              </div>
            </div>

        `;
    }
}

customElements.define('header-component', Header);
