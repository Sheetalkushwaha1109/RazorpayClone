/**
 * Razorpay Frontend Clone - Core Interactivity
 * Pure Vanilla JavaScript (ES6+) with Zero External Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Toast Notification Utility
     ========================================================================== */
  const toast = document.getElementById('toastNotification');
  const toastText = document.getElementById('toastText');
  let toastTimer = null;

  function showToast(message, isSuccess = true) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.querySelector('.toast-icon').innerHTML = isSuccess ? '&#10003;' : '&#9888;';
    toast.querySelector('.toast-icon').style.color = isSuccess ? '#48d08c' : '#f59e0b';
    
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  /* ==========================================================================
     2. Top Announcement Bar Dismissal
     ========================================================================== */
  const topAnnouncement = document.getElementById('topAnnouncement');
  const closeAnnouncementBtn = document.getElementById('closeAnnouncementBtn');

  if (closeAnnouncementBtn && topAnnouncement) {
    closeAnnouncementBtn.addEventListener('click', () => {
      topAnnouncement.style.transition = 'all 0.3s ease';
      topAnnouncement.style.opacity = '0';
      topAnnouncement.style.maxHeight = '0';
      topAnnouncement.style.padding = '0';
      setTimeout(() => {
        topAnnouncement.style.display = 'none';
      }, 300);
    });
  }

  /* ==========================================================================
     3. Sticky Header & Back to Top Button
     ========================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header shadow on scroll
    if (siteHeader) {
      if (scrollY > 15) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     4. Mobile Navigation Drawer & Hamburger Menu
     ========================================================================== */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');

  function openMobileDrawer() {
    if (!mobileDrawer || !hamburgerBtn) return;
    mobileDrawer.classList.add('open');
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (!mobileDrawer || !hamburgerBtn) return;
    mobileDrawer.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  }

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        closeMobileDrawer();
      }
    });
  }

  // Mobile Accordion Items
  const mobileAccordions = document.querySelectorAll('.mobile-accordion-toggle');
  mobileAccordions.forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      if (panel && panel.classList.contains('mobile-accordion-panel')) {
        btn.classList.toggle('active');
        panel.classList.toggle('show');
      }
    });
  });

  // Close mobile drawer when clicking sublinks
  const mobileSublinks = document.querySelectorAll('.mobile-sublink, .mobile-drawer-body a');
  mobileSublinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });

  /* ==========================================================================
     5. Hero Segment Switcher & Live Preview Content
     ========================================================================== */
  const segmentBtns = document.querySelectorAll('.segment-btn');
  const heroHeading = document.getElementById('heroHeading');
  const heroDescription = document.getElementById('heroDescription');
  const previewMerchantName = document.getElementById('previewMerchantName');
  const previewOrderName = document.getElementById('previewOrderName');
  const previewAmount = document.getElementById('previewAmount');
  const btnPayAmount = document.getElementById('btnPayAmount');

  const heroSegmentsData = {
    payments: {
      heading: 'Advanced payment solutions <br><span class="hero-title-highlight">for India\'s boldest disruptors</span>',
      description: '100+ Payment Methods | Easy Integration | Best-in-Class Performance. Accept payments instantly via UPI, Cards, Netbanking, Wallets & more.',
      merchant: 'Mamaearth Official',
      order: 'Order #ORD-84920 \u2022 Body Lotion',
      amount: '₹ 455.00'
    },
    banking: {
      heading: 'Effortless business banking <br><span class="hero-title-highlight">powered by smart automation</span>',
      description: 'Supercharge your financial workflows with India\'s top startup current account, bulk vendor payouts, and automated compliance.',
      merchant: 'RazorpayX Payouts',
      order: 'Vendor Disbursal \u2022 Bulk Batch #881',
      amount: '₹ 24,500.00'
    },
    payroll: {
      heading: 'Automated compliant payroll <br><span class="hero-title-highlight">built for modern companies</span>',
      description: 'Run error-free salary transfers, auto-generate payslips, and execute PF, PT, ESI & TDS filings in just 3 clicks.',
      merchant: 'Purplle HR Suite',
      order: 'October Payroll \u2022 42 Employees',
      amount: '₹ 8,40,000.00'
    },
    pos: {
      heading: 'Smart in-store payments <br><span class="hero-title-highlight">with top-tier UPI hardware</span>',
      description: 'Seamless Android POS card swiping terminals and instant dynamic audio soundboxes for physical retail and counters.',
      merchant: 'Wow! Momo Store #12',
      order: 'Counter Sale \u2022 Dine In Bill',
      amount: '₹ 320.00'
    },
    ai: {
      heading: 'Agentic payments & tools <br><span class="hero-title-highlight">built natively for AI builders</span>',
      description: 'Turn any conversational LLM, WhatsApp bot, or AI agent workflow into an autonomous one-click checkout engine.',
      merchant: 'Ray AI Studio',
      order: 'Autonomous Agent \u2022 API Checkout',
      amount: '₹ 1,299.00'
    }
  };

  segmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const segKey = btn.dataset.segment;
      if (!heroSegmentsData[segKey]) return;

      segmentBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = heroSegmentsData[segKey];
      if (heroHeading) heroHeading.innerHTML = data.heading;
      if (heroDescription) heroDescription.innerHTML = data.description;
      if (previewMerchantName) previewMerchantName.textContent = data.merchant;
      if (previewOrderName) previewOrderName.textContent = data.order;
      if (previewAmount) previewAmount.textContent = data.amount;
      if (btnPayAmount) btnPayAmount.textContent = data.amount;
    });
  });

  /* ==========================================================================
     6. Hero Live Checkout Simulator
     ========================================================================== */
  const previewTabBtns = document.querySelectorAll('.preview-tab-btn');
  const previewPanes = {
    upi: document.getElementById('paneUpi'),
    card: document.getElementById('paneCard'),
    netbanking: document.getElementById('paneNetbanking')
  };
  const simulatePayBtn = document.getElementById('simulatePayBtn');
  const previewInteractiveBody = document.getElementById('previewInteractiveBody');
  const previewSuccessState = document.getElementById('previewSuccessState');
  const resetPreviewBtn = document.getElementById('resetPreviewBtn');
  const successTxId = document.getElementById('successTxId');

  previewTabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      const targetTab = tabBtn.dataset.tab;
      previewTabBtns.forEach(b => b.classList.remove('active'));
      tabBtn.classList.add('active');

      Object.keys(previewPanes).forEach(paneKey => {
        if (previewPanes[paneKey]) {
          previewPanes[paneKey].classList.toggle('active', paneKey === targetTab);
        }
      });
    });
  });

  if (simulatePayBtn && previewInteractiveBody && previewSuccessState) {
    simulatePayBtn.addEventListener('click', () => {
      simulatePayBtn.innerHTML = '<span>Processing...</span> &#9203;';
      simulatePayBtn.style.opacity = '0.7';

      setTimeout(() => {
        simulatePayBtn.style.opacity = '1';
        simulatePayBtn.innerHTML = `<span>Pay Now</span> <span>${btnPayAmount.textContent}</span> <span>&rarr;</span>`;
        previewInteractiveBody.style.display = 'none';
        previewSuccessState.classList.add('show');

        // Generate realistic transaction ID
        const randId = 'pay_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36).substring(4);
        if (successTxId) successTxId.textContent = randId;

        showToast('Payment simulated successfully! Transaction ID: ' + randId);
      }, 700);
    });
  }

  if (resetPreviewBtn && previewInteractiveBody && previewSuccessState) {
    resetPreviewBtn.addEventListener('click', () => {
      previewSuccessState.classList.remove('show');
      previewInteractiveBody.style.display = 'block';
    });
  }

  /* ==========================================================================
     7. Core Product Suite Category Tabs
     ========================================================================== */
  const categoryTabBtns = document.querySelectorAll('.category-tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  categoryTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCat = btn.dataset.cat;
      categoryTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      productCards.forEach(card => {
        const cardCat = card.dataset.cat;
        if (selectedCat === 'all' || cardCat === selectedCat) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Also support clicking dropdown items that specify data-category
  document.querySelectorAll('[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-category');
      const matchingBtn = document.querySelector(`.category-tab-btn[data-cat="${cat}"]`);
      if (matchingBtn) {
        matchingBtn.click();
      }
    });
  });

  /* ==========================================================================
     8. Industry Solutions Interactive Switcher
     ========================================================================== */
  const industryBtns = document.querySelectorAll('.industry-pill-btn');
  const indTitle = document.getElementById('indTitle');
  const indDesc = document.getElementById('indDesc');
  const indFeatures = document.getElementById('indFeatures');
  const indMetricVal = document.getElementById('indMetricVal');
  const indMetricLabel = document.getElementById('indMetricLabel');
  const indLogosPreview = document.getElementById('indLogosPreview');
  const indCtaBtn = document.getElementById('indCtaBtn');

  const industryData = {
    ecommerce: {
      title: 'Empower your e-commerce business',
      desc: 'Streamline payment collection with a unified dashboard, enabling both online and in-person transactions while boosting checkout conversion rates and minimizing COD returns.',
      metricVal: '+70,000',
      metricLabel: 'Active D2C & E-commerce merchants',
      logos: ['Mamaearth', 'Nykaa', 'Blinkit', 'Zepto'],
      features: [
        'Magic Checkout: 1-click address autofill for 50M+ Indian shoppers',
        'RTO Protection: 50% decrease in Return-to-Origin shipping losses',
        'Instant Refunds: Delight shoppers with refund credit within 10 seconds'
      ],
      btnText: 'Explore E-Commerce Solutions →'
    },
    education: {
      title: 'Seamless payments for education & edtech',
      desc: 'Effortlessly establish and monitor tuition fee payments, recurring coaching subscriptions, and vendor payouts whether you have a full portal or zero website.',
      metricVal: '+21,000',
      metricLabel: 'Educational institutes & academies',
      logos: ['Doubtnut', 'Coursera India', 'Unacademy', 'Allen'],
      features: [
        'Custom fee collection forms with student ID and batch tracking',
        'Flexible EMI & zero-cost split installments for tuition fees',
        'Automated GST invoicing with real-time payment reconciliation'
      ],
      btnText: 'Explore Education Solutions →'
    },
    bfsi: {
      title: 'Full financial ecosystem for BFSI & fintech',
      desc: 'Streamline collection management, automate recurring mandate payments via eNACH and UPI AutoPay, and expedite loan disbursements via instant API payouts.',
      metricVal: '+2,800',
      metricLabel: 'Regulated NBFCs, insurtechs & fintechs',
      logos: ['Zerodha', 'CRED', 'Groww', 'PolicyBazaar'],
      features: [
        'Instant 24x7 loan disbursement directly to verified bank accounts',
        'Recurring mandate debit success rates above 94% with eNACH & UPI AutoPay',
        'Deep bank-grade encryption with automated audit trails and reporting'
      ],
      btnText: 'Explore BFSI Solutions →'
    },
    saas: {
      title: 'Global recurring payments for IT & SaaS',
      desc: 'Seamlessly accept payments in over 100 international currencies, facilitate customizable subscription billing tiers, and execute automated offshore payouts.',
      metricVal: '+13,500',
      metricLabel: 'Global SaaS & IT service providers',
      logos: ['Postman', 'Chargebee', 'Hasura', 'Freshworks'],
      features: [
        'Multi-currency support across 180+ countries with localized checkouts',
        'MoneySaver Export Account: Save up to 50% on international wire transfers',
        'Webhooks and real-time subscription lifecycle event synchronisation'
      ],
      btnText: 'Explore SaaS Solutions →'
    },
    freelance: {
      title: 'Personalized payment stack for freelancers',
      desc: 'Easily accept domestic and international payments without any coding expertise, while generating personalized, branded online payment links and invoices.',
      metricVal: '+1,20,000',
      metricLabel: 'Independent creators & freelancers',
      logos: ['Designers', 'Developers', 'Consultants', 'Educators'],
      features: [
        'Share instant Payment Links directly via WhatsApp, Instagram or Email',
        'Generate professional GST-compliant client invoices in 60 seconds',
        'Receive international cross-border card payments straight to bank'
      ],
      btnText: 'Explore Freelancer Solutions →'
    }
  };

  industryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const indKey = btn.dataset.ind;
      if (!industryData[indKey]) return;

      industryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = industryData[indKey];
      if (indTitle) indTitle.textContent = data.title;
      if (indDesc) indDesc.textContent = data.desc;
      if (indMetricVal) indMetricVal.textContent = data.metricVal;
      if (indMetricLabel) indMetricLabel.textContent = data.metricLabel;
      if (indCtaBtn) indCtaBtn.textContent = data.btnText;

      if (indFeatures) {
        indFeatures.innerHTML = data.features.map(f => `
          <div class="industry-feature-item">
            <span class="industry-feature-icon">&#10003;</span>
            <span>${f}</span>
          </div>
        `).join('');
      }

      if (indLogosPreview) {
        indLogosPreview.innerHTML = data.logos.map(l => `
          <span style="font-weight: 700; color: #192839;">${l}</span>
        `).join(' &bull; ');
      }
    });
  });

  if (indCtaBtn) {
    indCtaBtn.addEventListener('click', () => {
      openModal('signupModal');
    });
  }

  /* ==========================================================================
     9. Developer Section: Code Terminal Language Switcher & Copy
     ========================================================================== */
  const langBtns = document.querySelectorAll('.lang-btn');
  const codeSnippetDisplay = document.getElementById('codeSnippetDisplay');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const copyBtnText = document.getElementById('copyBtnText');

  const codeSnippets = {
    curl: `<span class="syn-cmd">curl</span> -X POST https://api.razorpay.com/v1/orders \\
  -U <span class="syn-str">[YOUR_KEY_ID]:[YOUR_KEY_SECRET]</span> \\
  -H <span class="syn-str">'Content-Type: application/json'</span> \\
  -d <span class="syn-str">'{
    "amount": 50000,
    "currency": "INR",
    "receipt": "order_rcptid_11",
    "notes": {
      "customer_tier": "gold",
      "platform": "web"
    }
  }'</span>`,

    node: `<span class="syn-cmd">const</span> Razorpay = <span class="syn-cmd">require</span>(<span class="syn-str">'razorpay'</span>);

<span class="syn-cmd">const</span> instance = <span class="syn-cmd">new</span> Razorpay({
  key_id: <span class="syn-str">'YOUR_KEY_ID'</span>,
  key_secret: <span class="syn-str">'YOUR_KEY_SECRET'</span>
});

<span class="syn-cmd">const</span> order = <span class="syn-cmd">await</span> instance.orders.create({
  amount: <span class="syn-num">50000</span>, <span class="syn-com">// 500.00 INR</span>
  currency: <span class="syn-str">'INR'</span>,
  receipt: <span class="syn-str">'order_rcptid_11'</span>,
  partial_payment: <span class="syn-num">false</span>
});
<span class="syn-cmd">console</span>.log(order.id);`,

    python: `<span class="syn-cmd">import</span> razorpay

client = razorpay.Client(
    auth=(<span class="syn-str">"YOUR_KEY_ID"</span>, <span class="syn-str">"YOUR_KEY_SECRET"</span>)
)

order = client.order.create({
    <span class="syn-str">"amount"</span>: <span class="syn-num">50000</span>,  <span class="syn-com"># In paise: ₹500</span>
    <span class="syn-str">"currency"</span>: <span class="syn-str">"INR"</span>,
    <span class="syn-str">"receipt"</span>: <span class="syn-str">"order_rcptid_11"</span>,
    <span class="syn-str">"payment_capture"</span>: <span class="syn-num">1</span>
})
<span class="syn-cmd">print</span>(order[<span class="syn-str">"id"</span>])`,

    java: `<span class="syn-cmd">import</span> com.razorpay.RazorpayClient;
<span class="syn-cmd">import</span> org.json.JSONObject;

RazorpayClient razorpay = <span class="syn-cmd">new</span> RazorpayClient(<span class="syn-str">"KEY_ID"</span>, <span class="syn-str">"SECRET"</span>);

JSONObject orderRequest = <span class="syn-cmd">new</span> JSONObject();
orderRequest.put(<span class="syn-str">"amount"</span>, <span class="syn-num">50000</span>);
orderRequest.put(<span class="syn-str">"currency"</span>, <span class="syn-str">"INR"</span>);
orderRequest.put(<span class="syn-str">"receipt"</span>, <span class="syn-str">"order_rcptid_11"</span>);

Order order = razorpay.orders.create(orderRequest);
System.out.println(order.get(<span class="syn-str">"id"</span>));`,

    php: `<span class="syn-cmd">&lt;?php</span>
<span class="syn-cmd">require</span>(<span class="syn-str">'razorpay-php/Razorpay.php'</span>);
<span class="syn-cmd">use</span> Razorpay\\Api\\Api;

$api = <span class="syn-cmd">new</span> Api(<span class="syn-str">'YOUR_KEY_ID'</span>, <span class="syn-str">'YOUR_KEY_SECRET'</span>);

$order = $api-&gt;order-&gt;create([
  <span class="syn-str">'receipt'</span>         =&gt; <span class="syn-str">'order_rcptid_11'</span>,
  <span class="syn-str">'amount'</span>          =&gt; <span class="syn-num">50000</span>,
  <span class="syn-str">'currency'</span>        =&gt; <span class="syn-str">'INR'</span>
]);
<span class="syn-cmd">echo</span> $order[<span class="syn-str">'id'</span>];`
  };

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const langKey = btn.dataset.lang;
      if (!codeSnippets[langKey]) return;

      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (codeSnippetDisplay) {
        codeSnippetDisplay.innerHTML = codeSnippets[langKey];
      }
    });
  });

  if (copyCodeBtn && codeSnippetDisplay) {
    copyCodeBtn.addEventListener('click', () => {
      // Strip HTML tags for clean clipboard text
      const cleanText = codeSnippetDisplay.innerText || codeSnippetDisplay.textContent;
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(cleanText).then(() => {
          showCopySuccess();
        }).catch(() => {
          fallbackCopyText(cleanText);
        });
      } else {
        fallbackCopyText(cleanText);
      }
    });
  }

  function fallbackCopyText(text) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    tempTextArea.style.position = 'fixed';
    tempTextArea.style.opacity = '0';
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    try {
      document.execCommand('copy');
      showCopySuccess();
    } catch (err) {
      showToast('Unable to copy code to clipboard', false);
    }
    document.body.removeChild(tempTextArea);
  }

  function showCopySuccess() {
    if (copyBtnText) copyBtnText.textContent = 'Copied!';
    showToast('Code snippet copied to clipboard!');
    setTimeout(() => {
      if (copyBtnText) copyBtnText.textContent = 'Copy Code';
    }, 2000);
  }

  const openDevDocsBtn = document.getElementById('openDevDocsBtn');
  if (openDevDocsBtn) {
    openDevDocsBtn.addEventListener('click', () => {
      showToast('Navigating to Razorpay Developer Documentation');
      window.location.hash = '#developers';
    });
  }

  const openPlaygroundBtn = document.getElementById('openPlaygroundBtn');
  if (openPlaygroundBtn) {
    openPlaygroundBtn.addEventListener('click', () => {
      const checkoutCard = document.getElementById('heroCheckoutCard');
      if (checkoutCard) {
        checkoutCard.scrollIntoView({ behavior: 'smooth' });
        showToast('Try the interactive checkout simulator on the hero section!');
      }
    });
  }

  /* ==========================================================================
     10. Interactive Pricing & Fee Calculator
     ========================================================================== */
  const calcSlider = document.getElementById('calcSlider');
  const calcVolumeDisplay = document.getElementById('calcVolumeDisplay');
  const calcFeeDisplay = document.getElementById('calcFeeDisplay');
  const calcNetDisplay = document.getElementById('calcNetDisplay');
  const calcStartBtn = document.getElementById('calcStartBtn');

  function formatIndianCurrency(amount) {
    return '₹ ' + Number(amount).toLocaleString('en-IN');
  }

  function updateCalculator() {
    if (!calcSlider) return;
    const volume = parseInt(calcSlider.value, 10);
    const fee = Math.round(volume * 0.02); // 2% standard domestic rate
    const net = volume - fee;

    if (calcVolumeDisplay) calcVolumeDisplay.textContent = formatIndianCurrency(volume);
    if (calcFeeDisplay) calcFeeDisplay.textContent = formatIndianCurrency(fee);
    if (calcNetDisplay) calcNetDisplay.textContent = formatIndianCurrency(net);
  }

  if (calcSlider) {
    calcSlider.addEventListener('input', updateCalculator);
    updateCalculator(); // initialize
  }

  if (calcStartBtn) {
    calcStartBtn.addEventListener('click', () => {
      openModal('signupModal');
    });
  }

  /* ==========================================================================
     11. Frequently Asked Questions (FAQ) Accordion
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      // Close all other items for clean accordion behavior
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     12. Modal Dialog Management (Sign Up, Login, Product Specs)
     ========================================================================== */
  function openModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (!targetModal) return;
    targetModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Autofocus first input if present
    const firstInput = targetModal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 150);
  }

  function closeModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (!targetModal) return;
    targetModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Close modal via data-close-modal attribute buttons
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      closeModal(modalId);
    });
  });

  // Close modal by clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  // Close modal on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
        closeModal(modal.id);
      });
      closeMobileDrawer();
    }
  });

  // Nav Login & Sign Up buttons
  const navLoginBtn = document.getElementById('navLoginBtn');
  const navSignupBtn = document.getElementById('navSignupBtn');
  const heroSignupBtn = document.getElementById('heroSignupBtn');
  const bannerSignupBtn = document.getElementById('bannerSignupBtn');
  const bannerSalesBtn = document.getElementById('bannerSalesBtn');
  const mobileLoginBtn = document.getElementById('mobileLoginBtn');
  const mobileSignupBtn = document.getElementById('mobileSignupBtn');

  if (navLoginBtn) navLoginBtn.addEventListener('click', () => openModal('loginModal'));
  if (navSignupBtn) navSignupBtn.addEventListener('click', () => openModal('signupModal'));
  if (heroSignupBtn) heroSignupBtn.addEventListener('click', () => openModal('signupModal'));
  if (bannerSignupBtn) bannerSignupBtn.addEventListener('click', () => openModal('signupModal'));
  if (mobileLoginBtn) {
    mobileLoginBtn.addEventListener('click', () => {
      closeMobileDrawer();
      openModal('loginModal');
    });
  }
  if (mobileSignupBtn) {
    mobileSignupBtn.addEventListener('click', () => {
      closeMobileDrawer();
      openModal('signupModal');
    });
  }

  if (bannerSalesBtn) {
    bannerSalesBtn.addEventListener('click', () => {
      showToast('Sales Inquiry Registered! A product specialist will contact you.');
    });
  }

  // Card Sign Up buttons
  document.querySelectorAll('.card-signup-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal('signupModal'));
  });

  // Demo Checkout button in Nav
  const navDemoCheckoutBtn = document.getElementById('navDemoCheckoutBtn');
  if (navDemoCheckoutBtn) {
    navDemoCheckoutBtn.addEventListener('click', () => {
      const checkoutCard = document.getElementById('heroCheckoutCard');
      if (checkoutCard) {
        checkoutCard.scrollIntoView({ behavior: 'smooth' });
        showToast('Explore the interactive checkout simulation right on the hero section!');
      }
    });
  }

  // Simulated Forms Submission
  const signupDemoForm = document.getElementById('signupDemoForm');
  if (signupDemoForm) {
    signupDemoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phoneVal = document.getElementById('signupPhone').value;
      if (!phoneVal) return;
      closeModal('signupModal');
      showToast('Demo Account Created for: ' + phoneVal + ' (Practice Simulation)');
    });
  }

  const loginDemoForm = document.getElementById('loginDemoForm');
  if (loginDemoForm) {
    loginDemoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailVal = document.getElementById('loginEmail').value;
      if (!emailVal) return;
      closeModal('loginModal');
      showToast('Demo Login Successful for: ' + emailVal);
    });
  }

  /* ==========================================================================
     13. Product Quick View / Specifications Modal
     ========================================================================== */
  const productDetailModal = document.getElementById('productDetailModal');
  const productDetailTitle = document.getElementById('productDetailTitle');
  const productDetailBody = document.getElementById('productDetailBody');

  const productSpecsData = {
    pg: {
      title: 'Razorpay Payment Gateway Specifications',
      body: `
        <div style="font-size: 0.95rem; color: #40566d; line-height: 1.6;">
          <p style="margin-bottom: 12px;"><strong>Supported Payment Modes:</strong> UPI (GPay, PhonePe, Paytm, BHIM), Credit/Debit Cards (Visa, Mastercard, RuPay, Maestro, Amex, Diners), 50+ Netbanking Banks, Wallets, EMI &amp; Pay Later.</p>
          <p style="margin-bottom: 12px;"><strong>Integration Options:</strong> Standard Checkout Modal, Custom Checkout SDKs (iOS, Android, React Native, Flutter), REST API, WordPress WooCommerce, Shopify, Magento, Wix.</p>
          <p style="margin-bottom: 12px;"><strong>Pricing &amp; Settlement:</strong> 2% per successful domestic transaction. Automatic settlement into registered bank account on T+2 days cycle.</p>
          <div style="background-color: #f1f5fa; padding: 12px; border-radius: 8px; font-size: 0.85rem; margin-top: 14px;">
            <strong>Compliance:</strong> Fully compliant with RBI Payment Aggregator guidelines &amp; PCI-DSS Level 1 tokenization norms.
          </div>
        </div>
      `
    },
    links: {
      title: 'Razorpay Payment Links Specifications',
      body: `
        <div style="font-size: 0.95rem; color: #40566d; line-height: 1.6;">
          <p style="margin-bottom: 12px;"><strong>Delivery Channels:</strong> Instant SMS, Email, WhatsApp Business API, and copyable URL sharing.</p>
          <p style="margin-bottom: 12px;"><strong>Features:</strong> Partial payments, custom link expiration timers, automatic payment reminders, and branded payment receipt generation.</p>
          <p style="margin-bottom: 12px;"><strong>No Coding Required:</strong> Create links manually in bulk via CSV upload or directly in 1 click from the merchant dashboard.</p>
        </div>
      `
    },
    pages: {
      title: 'Razorpay Payment Pages Specifications',
      body: `
        <div style="font-size: 0.95rem; color: #40566d; line-height: 1.6;">
          <p style="margin-bottom: 12px;"><strong>Use Cases:</strong> Event ticketing, online course sales, NGO donations, freelance work, and digital storefronts.</p>
          <p style="margin-bottom: 12px;"><strong>Customization:</strong> Add custom logo, banner, custom input fields (Name, Roll No, Address), and automatic response emails with payment receipts.</p>
          <p style="margin-bottom: 12px;"><strong>SSL Security:</strong> Pre-hosted on HTTPS secure domains with zero hosting setup or developer fees.</p>
        </div>
      `
    },
    pos: {
      title: 'Razorpay POS & Smart Hardware Specifications',
      body: `
        <div style="font-size: 0.95rem; color: #40566d; line-height: 1.6;">
          <p style="margin-bottom: 12px;"><strong>Hardware:</strong> Android Smart POS Terminal with high-speed built-in thermal printer, camera for barcode/QR scanning, and multi-network 4G SIM.</p>
          <p style="margin-bottom: 12px;"><strong>Soundbox:</strong> Dynamic multi-lingual voice payment alerts for instant UPI receipt confirmation.</p>
          <p style="margin-bottom: 12px;"><strong>Billing Integrations:</strong> Directly integrates with retail billing software including Petpooja, Posist, and Tally.</p>
        </div>
      `
    },
    optimizer: {
      title: 'Razorpay Optimizer Multi-Gateway Router',
      body: `
        <div style="font-size: 0.95rem; color: #40566d; line-height: 1.6;">
          <p style="margin-bottom: 12px;"><strong>Dynamic Routing:</strong> Intelligently analyzes gateway health, uptime, and card bin performance to route transactions to the highest-converting payment processor.</p>
          <p style="margin-bottom: 12px;"><strong>Aggregators Supported:</strong> Single API integration to 15+ payment gateways and merchant acquirers across India.</p>
          <p style="margin-bottom: 12px;"><strong>Zero Downtime:</strong> Automatic instant failover prevents dropped checkouts even during major bank server maintenance outages.</p>
        </div>
      `
    },
    subscriptions: {
      title: 'Razorpay Subscriptions & AutoPay Specifications',
      body: `
        <div style="font-size: 0.95rem; color: #40566d; line-height: 1.6;">
          <p style="margin-bottom: 12px;"><strong>AutoPay Channels:</strong> UPI AutoPay, eNACH / Netbanking mandates, and RBI-compliant recurring Credit/Debit card tokens.</p>
          <p style="margin-bottom: 12px;"><strong>Billing Plans:</strong> Daily, weekly, monthly, annual, or custom recurring intervals with flexible free trial periods.</p>
          <p style="margin-bottom: 12px;"><strong>Automated Dunning:</strong> Intelligent scheduled retries when customer account balance is low, reducing subscription churn by 30%.</p>
        </div>
      `
    },
    payouts: {
      title: 'RazorpayX Payouts & Bulk Disbursals',
      body: `
        <div style="font-size: 0.95rem; color: #40566d; line-height: 1.6;">
          <p style="margin-bottom: 12px;"><strong>Payment Rails:</strong> Instant 24x7 IMPS, NEFT, RTGS, and UPI transfers to any bank account in India.</p>
          <p style="margin-bottom: 12px;"><strong>Payout Links:</strong> Send payouts without asking recipients for their bank account details. Recipients enter their own UPI ID or bank details securely.</p>
          <p style="margin-bottom: 12px;"><strong>Approval Workflows:</strong> Multi-tiered maker-checker verification rules with OTP verification to ensure zero fraudulent disbursements.</p>
        </div>
      `
    },
    source2pay: {
      title: 'RazorpayX Source to Pay Automation',
      body: `
        <div style="font-size: 0.95rem; color: #40566d; line-height: 1.6;">
          <p style="margin-bottom: 12px;"><strong>Invoice OCR:</strong> Upload PDF or scanned vendor bills and auto-extract vendor name, GSTIN, amount, and line items.</p>
          <p style="margin-bottom: 12px;"><strong>TDS Deductions:</strong> Automatically calculates and withholds appropriate Section 194C / 194J TDS rates before vendor disbursal.</p>
          <p style="margin-bottom: 12px;"><strong>Accounting Sync:</strong> 2-way real-time synchronisation with Zoho Books, Tally Prime, and QuickBooks.</p>
        </div>
      `
    },
    currentaccount: {
      title: 'RazorpayX Current Account Specifications',
      body: `
        <div style="font-size: 0.95rem; color: #40566d; line-height: 1.6;">
          <p style="margin-bottom: 12px;"><strong>Partner Banks:</strong> Powered by RBI regulated banks including ICICI Bank, RBL Bank, and Yes Bank.</p>
          <p style="margin-bottom: 12px;"><strong>Automation:</strong> Programmatic access to bank statements, automated transaction reconciliation, and zero manual statement downloading.</p>
          <p style="margin-bottom: 12px;"><strong>Security:</strong> Bank-grade multi-factor authentication, granular team permissions, and real-time balance alerts.</p>
        </div>
      `
    },
    payroll: {
      title: 'RazorpayX Payroll Specifications',
      body: `
        <div style="font-size: 0.95rem; color: #40566d; line-height: 1.6;">
          <p style="margin-bottom: 12px;"><strong>Salary Disbursals:</strong> Execute monthly salary transfers directly into employee bank accounts in 3 clicks with automated salary slips.</p>
          <p style="margin-bottom: 12px;"><strong>Statutory Compliances:</strong> Automated calculations and challan payments for PF, ESI, Professional Tax (PT), and TDS (Form 24Q &amp; Form 16).</p>
          <p style="margin-bottom: 12px;"><strong>Employee Portal:</strong> Self-serve portal for tax declarations, leave tracking, reimbursement claims, and investment proof submissions.</p>
        </div>
      `
    },
    cards: {
      title: 'RazorpayX Corporate Credit Card Specifications',
      body: `
        <div style="font-size: 0.95rem; color: #40566d; line-height: 1.6;">
          <p style="margin-bottom: 12px;"><strong>Commercial Line:</strong> Collateral-free credit limits tailored to startup runway and revenue, issued on VISA commercial network.</p>
          <p style="margin-bottom: 12px;"><strong>Virtual &amp; Physical Cards:</strong> Issue unlimited virtual cards with specific merchant lock (e.g. AWS, Google Cloud, Meta Ads) and custom spend limits.</p>
          <p style="margin-bottom: 12px;"><strong>Perks:</strong> Up to 50 days interest-free credit and substantial cashback discounts on top SaaS and cloud infrastructure tools.</p>
        </div>
      `
    },
    agentic: {
      title: 'Razorpay Agentic Payments & AI Stack',
      body: `
        <div style="font-size: 0.95rem; color: #40566d; line-height: 1.6;">
          <p style="margin-bottom: 12px;"><strong>Agent Checkout:</strong> Native tooling that allows autonomous AI agents and conversational bots to trigger secure checkout sessions.</p>
          <p style="margin-bottom: 12px;"><strong>Ecosystem Connectors:</strong> Pre-packaged verified nodes for n8n, LangChain, Flowise, Replit, and Vercel AI SDK.</p>
          <p style="margin-bottom: 12px;"><strong>Guardrails:</strong> Configurable spending thresholds, human-in-the-loop approvals, and complete cryptographic order verification.</p>
        </div>
      `
    }
  };

  document.querySelectorAll('.card-knowmore-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalKey = btn.getAttribute('data-modal');
      const data = productSpecsData[modalKey] || productSpecsData.pg;

      if (productDetailTitle) productDetailTitle.textContent = data.title;
      if (productDetailBody) productDetailBody.innerHTML = data.body;
      openModal('productDetailModal');
    });
  });

  // Breakthrough Innovation "Know More" triggers
  document.querySelectorAll('.innov-learn-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const innovKey = btn.getAttribute('data-innov');
      const matchingKey = innovKey === 'turbo' ? 'pg' : 
                         innovKey === 'magic' ? 'pg' : 
                         innovKey === 'payouts' ? 'payouts' : 
                         innovKey === 'optimizer' ? 'optimizer' : 
                         innovKey === 'credit' ? 'cards' : 'pg';
      const data = productSpecsData[matchingKey] || productSpecsData.pg;
      if (productDetailTitle) productDetailTitle.textContent = data.title;
      if (productDetailBody) productDetailBody.innerHTML = data.body;
      openModal('productDetailModal');
    });
  });

  /* ==========================================================================
     14. Smooth Internal Anchor Link Scrolling with Header Offset
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Final confirmation
  console.log('Razorpay Frontend Clone initialized successfully.');
});
