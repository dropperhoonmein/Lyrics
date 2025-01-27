 async function getLyrics()
{
    const artist = document.querySelector('#a').value.trim();
    const song = document.querySelector('#s').value.trim();

    const lyricsText = document.querySelector('.lyricsBox p');

    if (!artist || !song) {
        alert("Please enter both artist and song name");
        return;
    }

    try {
        lyricsText.textContent = "Searching for lyrics...";
        
        // Fetch lyrics
        const lyricsResponse = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
        const lyricsData = await lyricsResponse.json();

        // Update UI
        document.getElementById('songName').textContent = song;
        document.getElementById('artistName').textContent = artist;
        lyricsText.textContent = lyricsData.lyrics || "Lyrics not found";

        // Additional API calls for song metadata could be added here

    } catch (error) {
        console.error("Error:", error);
        lyricsText.textContent = "Error fetching lyrics. Please try again.";
    }
}