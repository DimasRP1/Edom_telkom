function pilihPenilaian(labelPilihan) {
    var listItems = document.querySelectorAll('#radioX li');
    listItems.forEach(function(item) {
        var label = item.querySelector('.answerlist1').textContent.trim();
        if (label === labelPilihan) {
            var radioButton = item.querySelector('input[type="radio"]');
            radioButton.checked = true;
        }
    });
}
pilihPenilaian("Sangat puas");

