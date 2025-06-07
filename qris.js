function injectQrisTigerPrestige() {
  const fullUrl = window.location.href;

  if (fullUrl.includes("/deposit") && CONFIGQRIS.status === "ON") {
    if (
      !document.querySelector(
        'script[src="https://code.jquery.com/jquery-3.6.0.min.js"]'
      )
    ) {
      const scriptJquery = document.createElement("script");
      scriptJquery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
      scriptJquery.onload = () => {
        // Starting Here
        const getNavDeposit = $(".side-nav.side-nav--d ul");

        getNavDeposit.append(`<li data-v-70a1e4da class="side-nav__item">
          
        <div>
        <i data-v-0e010622="" data-v-70a1e4da="" class="icon-qris icon--lg"></i> <span data-v-70a1e4da="">QRIS NEW</span>
        </div>
        
        </li>`);

        // End Here
      };
      document.head.appendChild(scriptJquery);
    }
  }
}

injectQrisTigerPrestige();

const observer = new MutationObserver(function () {
  injectQrisTigerPrestige();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
