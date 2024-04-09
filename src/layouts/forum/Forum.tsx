import ScrollToTopButton from "../../utils/ScrollToTopButton";

function Forum() {
    return (
        <div className="container text-start" id="forum">
            <ScrollToTopButton />
            <div className="row">
                <div className="col-lg-9 mb-3">
                    <div className="row text-left mb-5">
                        <div className="col-lg-6 mb-3 mb-sm-0">
                            <div className="dropdown bootstrap-select form-control form-control-lg bg-white bg-op-9 text-sm w-lg-50" style={{ width: '100%' }}>
                                <select className="form-control form-control-lg bg-white bg-op-9 text-sm w-lg-50" data-toggle="select">
                                    <option> Categories </option>
                                    <option> Learn </option>
                                    <option> Share </option>
                                    <option> Build </option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-right">
                            <div className="dropdown bootstrap-select form-control form-control-lg bg-white bg-op-9 ml-auto text-sm w-lg-50" style={{ width: '100%' }}>
                                <select className="form-control form-control-lg bg-white bg-op-9 ml-auto text-sm w-lg-50" data-toggle="select">
                                    <option> Filter by </option>
                                    <option> Votes </option>
                                    <option> Replys </option>
                                    <option> Views </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-warning border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Drupal 8 quick starter guide</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">20 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">KenyeW</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#C++</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">141 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">122 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">290 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">54 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">DanielD</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">256 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">251 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">223 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Bootstrap 4 development in record time with AppStrap Bootstrap 4 Theme</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">32 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">AppStrapMaster</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">245 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">116 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">257 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-warning border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Bootstrap 4 development in record time with AppStrap Bootstrap 4 Theme</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">29 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">Themelize.me</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> <a className="text-black mr-2" href="#">#Drupal</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">49 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">29 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">170 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Drupal 8 quick starter guide</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">53 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">Themelize.me</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#iOS</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">164 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">82 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">240 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-danger border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Custom shortcut or command to launch command in terminal?</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">44 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">DanielD</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#C++</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">180 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">35 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">44 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">3 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">DanielD</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#C++</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> <a className="text-black mr-2" href="#">#Drupal</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">236 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">79 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">162 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Bootstrap 4 development in record time with AppStrap Bootstrap 4 Theme</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">46 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">DanielD</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#C++</a> <a className="text-black mr-2" href="#">#Drupal</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">130 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">121 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">191 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">41 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">KylieJ</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">194 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">16 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">113 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">30 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">AppStrapMaster</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">179 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">194 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">167 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Bootstrap 4 development in record time with AppStrap Bootstrap 4 Theme</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">56 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">AppStrapMaster</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">11 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">120 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">240 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-danger border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Windows batch, recursively copy files</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">25 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">Wizzy</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">25 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">211 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">234 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Drupal 8 quick starter guide</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">21 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">KylieJ</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#C++</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">70 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">187 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">234 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Windows batch, recursively copy files</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">60 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">KenyeW</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#iOS</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">288 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">206 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">1 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Custom shortcut or command to launch command in terminal?</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">27 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">KylieJ</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#AppStrap Theme</a> <a className="text-black mr-2" href="#">#Wordpress</a> <a className="text-black mr-2" href="#">#Drupal</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">144 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">92 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">25 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">22 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">Themelize.me</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">199 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">75 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">61 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">14 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">AppStrapMaster</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#C++</a> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#Drupal</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">74 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">77 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">144 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Custom shortcut or command to launch command in terminal?</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">15 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">Themelize.me</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">88 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">48 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">283 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Drupal 8 quick starter guide</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">59 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">KylieJ</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">82 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">22 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">40 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-3 mb-sm-0">
                                <h5>
                                    <a href="#" className="text-primary">Bootstrap 4 development in record time with AppStrap Bootstrap 4 Theme</a>
                                </h5>
                                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">26 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">Themelize.me</a></p>
                                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#iOS</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
                            </div>
                            <div className="col-md-4 op-7">
                                <div className="row text-center op-7">
                                    <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">163 Votes</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">236 Replys</span> </div>
                                    <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">22 Views</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-4 mb-lg-0 px-lg-0 mt-lg-0">
                    {/* <div style="visibility: hidden; display: none; width: 285px; height: 801px; margin: 0px; float: none; position: static; inset: 85px auto auto;"></div> */}
                    <div data-settings="{&quot;parent&quot;:&quot;#content&quot;,&quot;mind&quot;:&quot;#header&quot;,&quot;top&quot;:10,&quot;breakpoint&quot;:992}" data-toggle="sticky" className="sticky" style={{ top: '85px' }}><div className="sticky-inner">
                        <a className="btn btn-lg btn-block btn-success rounded-0 py-4 mb-3 bg-op-6 roboto-bold" href="#">Ask Question</a>
                        <div className="bg-white mb-3">
                            <h4 className="px-3 py-4 op-5 m-0">
                                Active Topics
                            </h4>
                            <hr className="m-0" />
                            <div className="pos-relative px-3 py-3">
                                <h6 className="text-primary text-sm">
                                    <a href="#" className="text-primary">Why Bootstrap 4 is so awesome? </a>
                                </h6>
                                <p className="mb-0 text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">39 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">AppStrapMaster</a></p>
                            </div>
                            <hr className="m-0" />
                            <div className="pos-relative px-3 py-3">
                                <h6 className="text-primary text-sm">
                                    <a href="#" className="text-primary">Custom shortcut or command to launch command in terminal? </a>
                                </h6>
                                <p className="mb-0 text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">58 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">DanielD</a></p>
                            </div>
                            <hr className="m-0" />
                            <div className="pos-relative px-3 py-3">
                                <h6 className="text-primary text-sm">
                                    <a href="#" className="text-primary">HELP! My Windows XP machine is down </a>
                                </h6>
                                <p className="mb-0 text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">48 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">DanielD</a></p>
                            </div>
                            <hr className="m-0" />
                            <div className="pos-relative px-3 py-3">
                                <h6 className="text-primary text-sm">
                                    <a href="#" className="text-primary">HELP! My Windows XP machine is down </a>
                                </h6>
                                <p className="mb-0 text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">38 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">DanielD</a></p>
                            </div>
                            <hr className="m-0" />
                        </div>
                        <div className="bg-white text-sm">
                            <h4 className="px-3 py-4 op-5 m-0 roboto-bold">
                                Stats
                            </h4>
                            <hr className="my-0" />
                            <div className="row text-center d-flex flex-row op-7 mx-0">
                                <div className="col-sm-6 flex-ew text-center py-3 border-bottom border-right"> <a className="d-block lead font-weight-bold" href="#">58</a> Topics </div>
                                <div className="col-sm-6 col flex-ew text-center py-3 border-bottom mx-0"> <a className="d-block lead font-weight-bold" href="#">1.856</a> Posts </div>
                            </div>
                            <div className="row d-flex flex-row op-7">
                                <div className="col-sm-6 flex-ew text-center py-3 border-right mx-0"> <a className="d-block lead font-weight-bold" href="#">300</a> Members </div>
                                <div className="col-sm-6 flex-ew text-center py-3 mx-0"> <a className="d-block lead font-weight-bold" href="#">DanielD</a> Newest Member </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Forum;