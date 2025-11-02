/*
cтруктура
<div class="_tabs-js">
        <div class="tabs__title-box">
            <span class="tabs__title">первая вкладка</span>
            <span class="tabs__title">вторая вкладка</span>
            <span class="tabs__title">третья вкладка</span>
        </div>
        <div class="tabs__item-box">
            <div class="tabs__item">
            </div>
            <div class="tabs__item">
            </div>
            <div class="tabs__item">
            </div>
        </div>
    </div>
*/

import {Tabs} from "../vendor.js"

let tabs = new Tabs({class: "_tabs-js"})
let windowInsulationTabs = new Tabs({class: "window-insulation-tabs"})
let orderAddressTabs = new Tabs({class: "order-address-tab"})
let orderPaymentTabs = new Tabs({class: "order-payment-tab"})
let productsWindowTabs = new Tabs({class: "products-window-tabs"})
let accountTabs = new Tabs({class: "account-tabs"})


