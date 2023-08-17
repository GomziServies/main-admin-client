let navHTML = `<nav class="hk-nav hk-nav-dark">
    <a href="javascript:void(0);" id="hk_nav_close" class="hk-nav-close"><span class="feather-icon"><i
                data-feather="x"></i></span></a>
    <div class="nicescroll-bar">
        <div class="navbar-nav-wrap">
            <ul class="navbar-nav flex-column">
                <p class="mb-1" style="font-size:12px;margin-left:8px;">Main</p>
                <li class="nav-item menu_dashboard mb-2">
                    <a class="nav-link" href="admin.html?menu_item=menu_dashboard">
                        <i class="fas fa-home"></i>
                        <span class="nav-link-text">Dashboard</span>
                    </a>
                </li>
                <p class="mb-1" style="font-size:12px;margin-left:8px;">Marketing and Sales</p>
                <li class="nav-item menu_fwg_inquiry">
                    <a class="nav-link" href="https://admin.fggroup.in/pages/contact/contact_inquiry.html">
                        <i class="fa fa-list" aria-hidden="true"></i>
                        <span class="nav-link-text">FWG Inquiry</span>
                    </a>
                </li>
                <li class="nav-item menu_menu_fgiit_inquiry">
                    <a class="nav-link" href="https://admin.fggroup.in/pages/contact/contact_inquiry.html">
                        <i class="fa fa-list" aria-hidden="true"></i>
                        <span class="nav-link-text">FGIIT Inquiry</span>
                    </a>
                </li>
                <li class="nav-item menu_menu_fwg_inquiry mb-2">
                    <a class="nav-link" href="https://admin.gcsconsultant.com/admin/pages/user/">
                        <i class="fa fa-list" aria-hidden="true"></i>
                        <span class="nav-link-text">GCS Inquiry</span>
                    </a>
                </li>
                <p class="mb-1" style="font-size:12px;margin-left:8px;">HRM</p>
                <li class="nav-item mb-2">
                    <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp1">
                        <i class="fa fa-users"></i>
                        <span class="nav-link-text">HRM</span>
                    </a>
                    <ul id="dash_drp1" class="nav flex-column collapse collapse-level-1 mb-2">
                    <li class="nav-item">
                        <ul class="nav flex-column">
                            <li class="nav-item menu_employee_detail">
                                <a class="nav-link" href="https://fitnesswithgomzi.com/admin/aemployee/">
                                <i class="fas fa-id-card"></i>
                                <span class="nav-link-text">Employee Detail</span>
                                </a>
                            </li>
                            <li class="nav-item menu_assign_task">
                                <a class="nav-link" href="https://fitnesswithgomzi.com/admin/atask/">
                                <i class="fas fa-tasks"></i>
                                <span class="nav-link-text">Assign task</span>
                                </a>
                            </li>
                            <li class="nav-item menu_sop">
                                <a class="nav-link" href="https://fitnesswithgomzi.com/admin/sop/">
                                <i class="fas fa-stream"></i>
                                <span class="nav-link-text">SOP</span>
                                </a>
                            </li>
                            <li class="nav-item menu_leave">
                                <a class="nav-link" href="https://fitnesswithgomzi.com/admin/employee-leave/">
                                <i class="fas fa-sign-out-alt"></i>
                                <span class="nav-link-text">Leave</span>
                                </a>
                            </li>
                            <li class="nav-item menu_lead">
                                <a class="nav-link" href="https://fitnesswithgomzi.com/admin/lead/">
                                <i class="fas fa-user-check"></i>
                                <span class="nav-link-text">Leads</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                </li>
                <p class="mb-1" style="font-size:12px;margin-left:8px;">Operating Activities</p>
                <li class="nav-item menu_time menu_category menu_food menu_food_bundle diet_plan diet_approve">
                <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp2">
                    <i class="fas fa-dumbbell"></i>
                    <span class="nav-link-text"> FWG </span>
                </a>
                <ul id="dash_drp2" class="nav flex-column collapse collapse-level-1">
                    <li class="nav-item">
                        <ul class="nav flex-column">
                            <li class="nav-item menu_exercise menu_exercise_bundle menu_exercise_plan">
                                <a class="nav-link" href="javascript:void(0);" data-toggle="collapse"
                                    data-target="#dash_drpExercise">
                                    <i class="ion ion-ios-bicycle"></i>
                                    <span class="nav-link-text">General Exercise </span>
                                </a>
                                <ul id="dash_drpExercise" class="nav flex-column collapse collapse-level-1 ml-3">
                                    <li class="nav-item">
                                        <ul class="nav flex-column">
                                            <li class="nav-item menu_exercise">
                                                <a class="nav-link" href="https://app-admin.fggroup.in/exercise.html?menu_item=menu_exercise"><i
                                                        class="ion ion-ios-bicycle"></i>Exercise</a>
                                            </li>
                                            <li class="nav-item menu_exercise_bundle">
                                                <a class="nav-link"
                                                    href="https://app-admin.fggroup.in/exercise-bundle.html?menu_item=menu_exercise_bundle"><i
                                                        class="fas fa-dumbbell" aria-hidden="true"></i>Exercise
                                                    Bundle</a>
                                            </li>
                                            <li class="nav-item menu_exercise_plan">
                                                <a class="nav-link"
                                                    href="https://app-admin.fggroup.in/exercise-plan.html?menu_item=menu_exercise_plan"><i
                                                        class="fas fa-shoe-prints" aria-hidden="true"></i>Exercise
                                                    Plan</a>
                                            </li>
                                            <li class="nav-item menu_exercise_approve">
                                                <a class="nav-link"
                                                    href="https://app-admin.fggroup.in/exercise-plan-approve.html?menu_item=menu_exercise_approve"><i
                                                        class="fas fa-clock-o" aria-hidden="true"></i>Exercise
                                                    Approve</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <ul class="nav flex-column">
                                    <li class="nav-item menu_exercise menu_exercise_bundle menu_exercise_plan">
                                        <a class="nav-link" href="javascript:void(0);" data-toggle="collapse"
                                            data-target="#dash_drpDiet">
                                            <i class="fas fa-cloud-meatball"></i>
                                            <span class="nav-link-text">General Diet </span>
                                        </a>
                                        <ul id="dash_drpDiet" class="nav flex-column collapse collapse-level-1 ml-3">
                                            <li class="nav-item">
                                                <ul class="nav flex-column">
                                                    <li class="nav-item menu_exercise">
                                                        <a class="nav-link"
                                                            href="https://app-admin.fggroup.in/food-time.html?menu_item=menu_time"><i
                                                            class="fas fa-clock-o" aria-hidden="true"></i>Food Time</a>
                                                    </li>
                                                    <li class="nav-item menu_exercise_bundle">
                                                        <a class="nav-link"
                                                            href="https://app-admin.fggroup.in/food-category.html?menu_item=menu_category"><i class="fa fa-bars" aria-hidden="true"></i>Food Category</a>
                                                    </li>
                                                    <li class="nav-item menu_exercise_plan">
                                                        <a class="nav-link"
                                                            href="https://app-admin.fggroup.in/food.html?menu_item=menu_food"><i class="fa fa-hamburger" aria-hidden="true"></i>Food</a>
                                                    </li>
                                                    <li class="nav-item menu_exercise_approve">
                                                        <a class="nav-link"
                                                            href="https://app-admin.fggroup.in/food-bundle.html?menu_item=menu_food_bundle"><i class="fas fa-utensils"></i>Food Bundle</a>
                                                    </li>
                                                    <li class="nav-item menu_exercise_approve">
                                                        <a class="nav-link"
                                                            href="https://app-admin.fggroup.in/diet.html?menu_item=diet_plan"><i class="fas fa-calendar-alt"></i>Diet</a>
                                                    </li>
                                                    <li class="nav-item menu_exercise_approve">
                                                        <a class="nav-link"
                                                            href="https://app-admin.fggroup.in/diet-approve.html?menu_item=diet_approve"><i class="fas fa-calendar-check"></i>Diet Approve</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
                <li class="nav-item menu_time menu_category menu_food menu_food_bundle diet_plan diet_approve">
                    <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp6">
                        <i class="fas fa-school"></i>
                        <span class="nav-link-text"> FGIIT </span>
                    </a>
                    <ul id="dash_drp6" class="nav flex-column collapse collapse-level-1">
                        <li class="nav-item">
                            <ul class="nav flex-column">
                                <li class="nav-item menu_users">
                                    <a class="nav-link" href="https://app-admin.fggroup.in/user.html?menu_item=menu_users"><i class="fas fa-envelope"></i>Weekly Inquiry</a>
                                </li>
                                <li class="nav-item menu_admin">
                                    <a class="nav-link" href="https://admin.fggroup.in/student_dashboard.html"><i class="fas fa-user-graduate"></i> Student Dashboard</a>
                                </li>
                                <li class="nav-item menu_users">
                                    <a class="nav-link" href="https://admin.fggroup.in/pages/user/user_book_subscription.html"><i class="fas fa-shopping-cart"></i>Order</a>
                                </li>
                                <li class="nav-item menu_users">
                                    <a class="nav-link" href="https://admin.fggroup.in/pages/fgiit/scholarship_result.html"><i class="fas fa-poll-h"></i>Scholarship Result</a>
                                </li>
                                <li class="nav-item menu_users">
                                    <a class="nav-link" href="https://admin.fggroup.in/pages/reference/reference.html"><i class="fas fa-ad"></i>Refer Coupon</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="nav-item menu_time menu_category menu_food menu_food_bundle diet_plan diet_approve">
                    <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp7">
                        <i class="fas fa-handshake"></i>
                        <span class="nav-link-text"> GCS </span>
                    </a>
                    <ul id="dash_drp7" class="nav flex-column collapse collapse-level-1">
                        <li class="nav-item">
                            <ul class="nav flex-column">
                                <li class="nav-item menu_users">
                                    <a class="nav-link" href="https://admin.gcsconsultant.com/admin/pages/user/"><i class="fas fa-envelope"></i>Weekly Inquiry</a>
                                </li>
                                <li class="nav-item menu_admin">
                                    <a class="nav-link" href="https://admin.gcsconsultant.com/pages/gcs/"><i class="fas fa-users"></i>All User</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
        </div>
</nav>`
// get type from localstorage parse
let type = JSON.parse(localStorage.getItem('type'));

if (type == 'SUB') {
    let navHTMLSUB = `<nav class="hk-nav hk-nav-dark">
    <a href="javascript:void(0);" id="hk_nav_close" class="hk-nav-close"><span class="feather-icon"><i
                data-feather="x"></i></span></a>
    <div class="nicescroll-bar">
        <div class="navbar-nav-wrap">
            <ul class="navbar-nav flex-column">
                <li class="nav-item menu_dashboard">
                    <a class="nav-link" href="admin.html?menu_item=menu_dashboard">
                        <i class="ion ion-ios-keypad"></i>
                        <span class="nav-link-text">Dashboard</span>
                    </a>
                </li>
                <li class="nav-item menu_time menu_category menu_food menu_food_bundle diet_plan diet_approve">
                    <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp2">
                        <i class="fas fa-apple-alt"></i>
                        <span class="nav-link-text"> Food </span>
                    </a>
                    <ul id="dash_drp2" class="nav flex-column collapse collapse-level-1">
                        <li class="nav-item">
                            <ul class="nav flex-column">
                                <li class="nav-item menu_time">
                                    <a class="nav-link " href="food-time.html?menu_item=menu_time"><i
                                            class="fa fa-clock-o" aria-hidden="true"></i> Food Time</a>
                                </li>
                                <li class="nav-item menu_category">
                                    <a class="nav-link" href="food-category.html?menu_item=menu_category"><i
                                            class="fa fa-bars" aria-hidden="true"></i> Food Category</a>
                                </li>
                                <li class="nav-item menu_food">
                                    <a class="nav-link" href="food.html?menu_item=menu_food"><i class="fa fa-hamburger"
                                            aria-hidden="true"></i> Food</a>
                                </li>
                                <li class="nav-item menu_food_bundle">
                                    <a class="nav-link" href="food-bundle.html?menu_item=menu_food_bundle"><i
                                            class="fas fa-utensils"></i></ion-icon>Food Bundle</a>
                                </li>
                                <li class="nav-item diet_plan">
                                    <a class="nav-link" href="diet.html?menu_item=diet_plan">
                                        <i class="ion ion-ios-calendar"></i>
                                        <span class="nav-link-text">Diet</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="nav-item menu_exercise menu_exercise_bundle menu_exercise_plan">
                    <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp4">
                        <i class="ion ion-ios-bicycle"></i>
                        <span class="nav-link-text"> Exercise </span>
                    </a>
                    <ul id="dash_drp4" class="nav flex-column collapse collapse-level-1">
                        <li class="nav-item">
                            <ul class="nav flex-column">
                                <li class="nav-item menu_exercise">
                                    <a class="nav-link" href="exercise.html?menu_item=menu_exercise"><i
                                            class="ion ion-ios-bicycle"></i>Exercise</a>
                                </li>
                                <li class="nav-item menu_exercise_bundle">
                                    <a class="nav-link" href="exercise-bundle.html?menu_item=menu_exercise_bundle"><i
                                            class="fas fa-dumbbell" aria-hidden="true"></i>Exercise Bundle</a>
                                </li>
                                <li class="nav-item menu_exercise_plan">
                                    <a class="nav-link" href="exercise-plan.html?menu_item=menu_exercise_plan"><i
                                            class="fas fa-shoe-prints" aria-hidden="true"></i>Exercise Plan</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="nav-item menu_user_diet_feedback menu_user_exercise_feedback">
                    <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#dt_feedback">
                        <i class="fa fa-check"></i>
                        <span class="nav-link-text">Diet/Exercise Feedbacks</span>
                    </a>
                    <ul id="dt_feedback" class="nav flex-column collapse collapse-level-1">
                        <li class="nav-item">
                            <ul class="nav flex-column">
                                <li class="nav-item menu_user_diet_feedback">
                                    <a class="nav-link"
                                        href="user-diet-feedback.html?menu_item=menu_user_diet_feedback">
                                        <i class="fas fa-bread-slice" aria-hidden="true"></i>
                                        <span class="nav-link-text">Diet Feedback</span>
                                    </a>
                                </li>
                                <li class="nav-item menu_user_exercise_feedback">
                                    <a class="nav-link"
                                        href="user-exercise-feedback.html?menu_item=menu_user_exercise_feedback">
                                        <i class="fas fa-walking" aria-hidden="true"></i>
                                        <span class="nav-link-text">Exercise Feedback</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
            </li>
            </ul>
        </div>
    </div>
</nav>`
    $('#navHTML').html(navHTMLSUB);
} else if (type == 'MASTER') {
    $('#navHTML').html(navHTML);

}
// $('ul > li').addClass('mt-5')

// Header Profile
// ui_header_profile
document.getElementById('ui_header_profile').innerHTML = `<li class="nav-item dropdown dropdown-authentication">
    <a class="nav-link dropdown-toggle no-caret" href="javascript:void(0);" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        <div class="media">
            <div class="media-img-wrap">
                <div class="avatar">
                    <img src="" id="img_admin_profile_image" alt="user" class="avatar-img rounded-circle"
                        onerror='this.src="dist/img/ico.png"'>
                </div>
                <!-- <span class="badge badge-success badge-indicator"></span> -->
            </div>
            <div class="media-body">
                <span id="lbl_profileName">Admin Profile<i class="zmdi zmdi-chevron-down"></i></span>
            </div>
        </div>
    </a>
    <div class="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
        <a class="dropdown-item" onclick="logout()" href="javascript:void(0);"><i
                class="dropdown-icon zmdi zmdi-power"></i><span>Log out</span></a>
    </div>
</li>`