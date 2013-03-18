<aside id="donate-form-content">
    <ul id="breadcrumbs">
        <h2 class="header-title">Donate today</h2>
        <li id="breadcrumb-amount" class="breadcrumb-item current">Amount<span>1</span></li>
        <li id="breadcrumb-name" class="breadcrumb-item">Name<span><hr>2</span></li>
        <li id="breadcrumb-payment" class="breadcrumb-item">Payment<span><hr>3</span></li>
        <li id="breadcrumb-employment" class="breadcrumb-item">Submit<span><hr>4</span></li>
    </ul>
    <p class="secure">secure</p>
    <form id="donate-form" class="oDonate" action="#"  data-customerrorhandler="customError">
        <ul id="form-fields" aria-live="assertive">

            <p class="general_error hidden error" id="general_error"></p>
            <!--/#form-section-header-cont-->
            <li id="personalized-content"></li>
            <li id="firstname-cont" class="personalized-info firstname_related">
                <p class="firstname_error hidden error"></p>
                <label for="firstname" class="firstname_related">*First name</label>
                <input type="text" class="text" name="firstname" id="firstname" tabindex="1">
            </li><!--/#firstname-cont-->
            <li id="lastname-cont" class="personalized-info lastname_related">
                <p class="lastname_error hidden error"></p>
                <label for="lastname" class="lastname_related">*Last name</label>
                <input type="text" class="text" name="lastname" id="lastname" tabindex="2">
            </li><!--/#lastname-cont-->
            <!-- <li id="address-title" class="sectional-heading"><div class="sectional-heading-inner"><p>Title for address section</p></div></li> -->
            <li id="addr1-cont" class="personalized-info addr1_related">
                <p class="addr1_error hidden error"></p>
                <label for="addr1" class="addr1_related">*Address</label>
                <input type="text" class="text" name="addr1" id="addr1" tabindex="3">
            </li><!--/#addr1-cont-->
            <li id="city-cont" class="personalized-info city_related">
                <p class="city_error hidden error"></p>
                <label for="city" class="city_related">*City</label>
                <input type="text" class="text" name="city" id="city" tabindex="5">
            </li><!--/#city-cont-->
            <li id="state_cd-cont" class="personalized-info state_cd_related">
                <p class="state_cd_error hidden error"></p>
                <label for="state_cd" class="state_cd_related">*State</label>
                <select id="state_cd" name="state_cd" tabindex="6">
                    <option value="" selected="selected"></option>
                    
                    <option value="AK">AK</option>
                    
                    <option value="AL">AL</option>
                    
                    <option value="AR">AR</option>
                    
                    <option value="AZ">AZ</option>
                    
                    <option value="CA">CA</option>
                    
                    <option value="CO">CO</option>
                    
                    <option value="CT">CT</option>
                    
                    <option value="DC">DC</option>
                    
                    <option value="DE">DE</option>
                    
                    <option value="FL">FL</option>
                    
                    <option value="GA">GA</option>
                    
                    <option value="HI">HI</option>
                    
                    <option value="IA">IA</option>
                    
                    <option value="ID">ID</option>
                    
                    <option value="IL">IL</option>
                    
                    <option value="IN">IN</option>
                    
                    <option value="KS">KS</option>
                    
                    <option value="KY">KY</option>
                    
                    <option value="LA">LA</option>
                    
                    <option value="MA">MA</option>
                    
                    <option value="MD">MD</option>
                    
                    <option value="ME">ME</option>
                    
                    <option value="MI">MI</option>
                    
                    <option value="MN">MN</option>
                    
                    <option value="MO">MO</option>
                    
                    <option value="MS">MS</option>
                    
                    <option value="MT">MT</option>
                    
                    <option value="NC">NC</option>
                    
                    <option value="ND">ND</option>
                    
                    <option value="NE">NE</option>
                    
                    <option value="NH">NH</option>
                    
                    <option value="NJ">NJ</option>
                    
                    <option value="NM">NM</option>
                    
                    <option value="NV">NV</option>
                    
                    <option value="NY">NY</option>
                    
                    <option value="OH">OH</option>
                    
                    <option value="OK">OK</option>
                    
                    <option value="OR">OR</option>
                    
                    <option value="PA">PA</option>
                    
                    <option value="RI">RI</option>
                    
                    <option value="SC">SC</option>
                    
                    <option value="SD">SD</option>
                    
                    <option value="TN">TN</option>
                    
                    <option value="TX">TX</option>
                    
                    <option value="UT">UT</option>
                    
                    <option value="VA">VA</option>
                    
                    <option value="VT">VT</option>
                    
                    <option value="WA">WA</option>
                    
                    <option value="WI">WI</option>
                    
                    <option value="WV">WV</option>
                    
                    <option value="WY">WY</option>
                    
                    <option value="AA">AA</option>
                    
                    <option value="AE">AE</option>
                    
                    <option value="AP">AP</option>
                    
                    <option value="AS">AS</option>
                    
                    <option value="FM">FM</option>
                    
                    <option value="GU">GU</option>
                    
                    <option value="MH">MH</option>
                    
                    <option value="MP">MP</option>
                    
                    <option value="PR">PR</option>
                    
                    <option value="PW">PW</option>
                    
                    <option value="VI">VI</option>
                    
                </select>
            </li><!--/#state_cd-cont-->
            <li id="zip-cont" class="personalized-info zip_related">
                <p class="zip_error hidden error"></p>
                <label for="zip" class="zip_related">*ZIP</label>
                <input type="text" class="text" name="zip" id="zip" tabindex="7">
            </li><!--/#zip-cont-->
            
            <li id="country-cont" class="hidden">
                <input type="text" value="US" name="country">
            </li>
            
            <li id="email-cont" class="personalized-info email_related">
                <p class="email_error hidden error"></p>
                <label for="email" class="email_related">*Email</label>
                <input type="text" class="text" name="email" id="email" tabindex="8">
            </li><!--/#email-->
            <li id="phone-cont" class="personalized-info phone_related">
                <p class="phone_error hidden error"></p>
                <label for="phone" class="phone_related">*Phone number</label>
                <input type="text" class="text" name="phone" id="phone" tabindex="9">
            </li><!--/#phone-->
            <li class="form-section-header-cont amount_group_related" id="select-amount-header">
                <h2 class="form-section-header" id="amount-header">Select an amount</h2>
            </li><!--/.form-section-header-cont-->
            <li id="amounts-cont" class="amount_group_related">
                <p class="amount_group_error hidden error"></p>
                <input type="radio" name="amount" value="other" id="other-amount-radio" checked>
                <ul id="amounts">
                    
                    
                    <li class="amount-cont first" id="amount-cont-1">
                        <input type="radio" class="radio" name="amount" value="15" tabindex="10" id="amount-15">
                        <label for="amount-15">$15</label>
                    </li>
                    
                    <li class="amount-cont" id="amount-cont-2">
                        <input type="radio" class="radio" name="amount" value="35" tabindex="11" id="amount-35">
                        <label for="amount-35">$35</label>
                    </li>
                    
                    <li class="amount-cont" id="amount-cont-3">
                        <input type="radio" class="radio" name="amount" value="50" tabindex="12" id="amount-50">
                        <label for="amount-50">$50</label>
                    </li>
                    
                    <li class="amount-cont" id="amount-cont-4">
                        <input type="radio" class="radio" name="amount" value="100" tabindex="13" id="amount-100">
                        <label for="amount-100">$100</label>
                    </li>
                    
                    <li class="amount-cont" id="amount-cont-5">
                        <input type="radio" class="radio" name="amount" value="250" tabindex="14" id="amount-250">
                        <label for="amount-250">$250</label>
                    </li>
                    
                    <li class="amount-cont" id="amount-cont-6">
                        <input type="radio" class="radio" name="amount" value="500" tabindex="15" id="amount-500">
                        <label for="amount-500">$500</label>
                    </li>
                    
                    <li class="amount-cont" id="amount-cont-7">
                        <input type="radio" class="radio" name="amount" value="1,000" tabindex="16" id="amount-1,000">
                        <label for="amount-1,000">$1,000</label>
                    </li>
                    
                    
                    <li class="amount-cont last" id="amount-cont-8">
                        <label for="amount-other">Other</label>
                        <input type="text" class="text" name="amount_other" id="amount-other" placeholder="Other amount" tabindex="18">
                    </li>
                </ul>
                <!-- <p id="suggested-amount">Suggested amount*</p> -->
            </li>
            <li class="form-section-header-cont qd-info cc_number_related cc_expir_group_related">
                <h2 class="form-section-header" id="creditcard-header">Credit card</h2>
            </li><!--/.form-section-header-cont-->
            <li id="cc-type-cont" class="qd-info">
                <p id="accepted-ccs">We accept Visa, MasterCard, American Express and Discover cards.</p>
                <ul id="cc-type-radio-cont">
                    <li>
                        <input type="radio" class="radio" id="cc_mc" value="mc" name="cc_type_cd" tabindex="19">
                        <label for="mc">MasterCard</label>
                    </li>
                    <li>
                        <input type="radio" class="radio" id="cc_vs" value="vs" name="cc_type_cd" tabindex="20">
                        <label for="vs">Visa</label>
                    </li>
                    <li>
                        <input type="radio" class="radio" id="cc_ax" value="ax" name="cc_type_cd" tabindex="21">
                        <label for="am">AmericanExpress</label>
                    </li>
                    <li>
                        <input type="radio" class="radio" id="cc_ds" value="ds" name="cc_type_cd" tabindex="22">
                        <label for="ds">Discover</label>
                    </li>
                </ul><!--/#cc-type-radio-cont-->
            </li><!--/#cc_type-cont-->
            <li id="cc-number-cont" class="qd-info cc_number_related cc_type_cd_group_related">
                <p class="cc_number_error hidden error"></p>
                <p class="cc_type_cd_group_error hidden error"></p>
                <label for="cc_number" class="cc_number_related cc_type_cd_group_related">*Card number</label>
                <input type="text" class="text cc_type_cd_group_related" id="cc_number" name="cc_number" tabindex="23" autocomplete="off">
            </li>
            <li id="cc-expiration-cont" class="qd-info cc_expir_group_related">
                <p class="cc_expir_group_error hidden error"></p>
                <label id="dont-donate" for="cc_expir_month" class="cc_expir_group_related">*This panel has errors disabled. Please don't enter your credit card info. Seriously.</label>
            </li>
            
            <li id="employer-cont" class="personalized-info employer_related">
                <p class="employer_error hidden error"></p>
                <label for="employer" class="employer_related">*Employer</label>
                <input id="employer" type="text" class="text" name="employer" tabindex="27">
            </li>
            
            <li id="occupation-cont" class="personalized-info occupation_related">
                <p class="occupation_error hidden error"></p>
                <label for="occupation" class="occupation_related">*Occupation</label>
                <input id="occupation" type="text" class="text" name="occupation" tabindex="28">
            </li>
           
            <li class="form-section-header-cont personalized-info employer_related occupation_related">
                <h2 class="form-section-header" id="employment-header">Employment</h2>
                <p class="employment-disclaimer"></p>
            </li><!--/#form-section-header-cont-->
            
            <input id="BSDForm-quick_donate_populated" name="quick_donate_populated" type="hidden" value="0">
            
            <input type="hidden" value="https://my.barackobama.com/page/s/Thanks-Now-Volunteer" id="success_url" name="thank_you_override_url">
            
            <input id="source" type="hidden" name="source_codes" value="FE12_main_20130208_krr">
            
            <input id="callback_host" name="callback_host" type="hidden" value="contribute.barackobama.com">

            <li id="submit-cont" class="hide">
                <p id="processing-indicator">Processing...</p>
                <input type="submit" value="Submit" id="submit-hidden" tabindex="29">
            </li>
        </ul>
    </form>
    <a href="#" id="next" title="next"><p>Next</p></a>
    <a href="#" id="submit-button" title="Submit"><span id="processingform">Thanks for your fake donation</span>Submit</a>
    <span class="premature">Please fill out all of the fields.</span>
</aside><!--/.sequential-->