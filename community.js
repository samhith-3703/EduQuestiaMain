function submitResponse() {
    var queryId = document.getElementById('querySelection').value;
    var name = document.getElementById('responseName').value;
    var response = document.getElementById('responseText').value;

    var postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = '<p><strong>' + name + ':</strong> ' + response + '</p>';

    document.getElementById(queryId).appendChild(postElement);

    document.getElementById('responseName').value = '';
    document.getElementById('responseText').value = '';
}

function postQuery() {
    var queryText = document.getElementById('queryText').value;
    var queryName = document.getElementById('queryName').value;

    var queryElement = document.createElement('div');
    queryElement.classList.add('post');
    queryElement.innerHTML = '<p>Query: ' + queryText + '</p><p><strong>' + queryName + ':</strong> This query was posted by ' + queryName + '.</p>';

    document.querySelector('.discussion').appendChild(queryElement);

    document.getElementById('queryText').value = '';
    document.getElementById('queryName').value = '';
}
