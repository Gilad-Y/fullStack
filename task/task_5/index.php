<!DOCTYPE html>
<html>
<head>
    <title>Google Search</title>
</head>
<body>
    <form action="https://www.google.co.il/search" method="get">
        <input type="text" name="q" placeholder="Search term">
        <input type="submit" value="Search">
    </form>

    <?php
    if (isset($_GET['q'])) {
        $searchTerm = urlencode($_GET['q']);
        $searchURL = "https://www.google.co.il/search?q=" . $searchTerm;
        echo "<iframe src=\"$searchURL\" style=\"width: 100%; height: 400px; border: none;\"></iframe>";
    }
    ?>

</body>
</html>
