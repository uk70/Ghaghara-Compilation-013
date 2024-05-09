


var linksData = [
    "Our Story", "Who we are", "Sustainable practices",
    "Design Ideology", "Fabrics", "Circular denim™",
    "Partners and factories", "Discover", "Gift Cards",
    "Frank Rewards", "Give $15, Get $15", "Affiliate",
    "Work with us", "Our Stores", "Customer Care",
    "Shipping Information", "Returns & Exchanges",
    "Coupon Codes", "F.A.Q.", "Terms & Conditions",
    "Refund Policy", "Privacy policy", "Accessibility Statement",
    "Customer Data Requests"
];

// URLs corresponding to each link
var pageUrls = [
    "our_story.html", "who_we_are.html", "sustainable_practices.html",
    "design_ideology.html", "fabrics.html", "circular_denim.html",
    "partners_and_factories.html", "discover.html", "gift_cards.html",
    "frank_rewards.html", "give_15_15.html", "affiliate.html",
    "work_with_us.html", "our_stores.html", "customer_care.html",
    "shipping_information.html", "returns_exchanges.html",
    "coupon_codes.html", "faq.html", "terms_conditions.html",
    "refund_policy.html", "privacy_policy.html", "accessibility_statement.html",
    "customer_data_requests.html"
];

var tableBody = document.querySelector('#ourLinks tbody');
var rowCount = 10;
var columnCount = 3;
var dataIndex = 3;

for (var i = 0; i < rowCount; i++) {
    var row = document.createElement('tr');

    for (var j = 0; j < columnCount; j++) {
        var cell = document.createElement('td');
        var linkIndex = dataIndex % linksData.length;
        if ((i === 8 || i === 9) && j !== 2) {
            cell.textContent = '';
        } else {
            var anchor = document.createElement('a');
            anchor.href = pageUrls[linkIndex]; 
            anchor.textContent = linksData[linkIndex];
            anchor.style.textDecoration = 'none'; 
            anchor.style.color = 'white'; 
            cell.appendChild(anchor);
            dataIndex++; 
        }
        cell.style.padding = '7px 75px 10px 10px';
        row.appendChild(cell);
    }

    tableBody.appendChild(row);
}







  document.getElementById('emailInput').addEventListener('input', function() {
    this.classList.add('white-text');
  });

  document.getElementById('nameInput').addEventListener('input', function() {
    this.classList.add('white-text');
  });

  document.getElementById('subscribeButton').addEventListener('click', function() {
    var nameInput = document.getElementById('nameInput').value.trim();
    var emailInput = document.getElementById('emailInput').value.trim();
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');

   
    nameError.textContent = '';
    emailError.textContent = '';
    document.getElementById('nameInput').classList.remove('error-border');
    document.getElementById('emailInput').classList.remove('error-border');

    if (nameInput === '') {
      nameError.textContent = 'Name is required';
      document.getElementById('nameInput').classList.add('error-border');
    }
    if (emailInput === '') {
      emailError.textContent = 'Email is required';
      document.getElementById('emailInput').classList.add('error-border');
    }
    if (nameInput === '' || emailInput === '') {
      return; 
    }

   
    alert('Subscribed successfully!');

    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
  });
