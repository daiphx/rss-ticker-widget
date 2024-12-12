// RSS Ticker Widget
// This script creates a simple RSS feed ticker widget that can be embedded in Notion or other platforms.
// It supports URL parameters for RSS feed URL, background color, font color, scroll speed, and font size.

const urlParams = new URLSearchParams(window.location.search);

const feedUrl = urlParams.get('feed') || 'https://example.com/rss';
const bgColor = urlParams.get('bgColor') || '#000';
const fontColor = urlParams.get('fontColor') || '#fff';
const scrollSpeed = parseInt(urlParams.get('speed'), 10) || 10; // Default speed of 10 seconds
const fontSize = parseInt(urlParams.get('fontSize'), 10) || 16; // Default font size of 16px

const container = document.createElement('div');
container.style.position = 'fixed';
container.style.bottom = '0';
container.style.width = '100%';
container.style.backgroundColor = bgColor;
container.style.color = fontColor;
container.style.whiteSpace = 'nowrap';
container.style.overflow = 'hidden';
container.style.fontSize = `${fontSize}px`;
container.style.lineHeight = `${fontSize * 2}px`;
container.style.fontFamily = 'Arial, sans-serif';

const tickerContent = document.createElement('div');
tickerContent.style.display = 'inline-block';
tickerContent.style.animation = `scroll-left ${scrollSpeed}s linear infinite`;
tickerContent.innerHTML = '<span>Loading...</span>';

container.appendChild(tickerContent);
document.body.appendChild(container);

const style = document.createElement('style');
style.innerHTML = `
@keyframes scroll-left {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}
`;
document.head.appendChild(style);

async function fetchRSS() {
    try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`);
        const data = await response.json();
        if (data && data.items) {
            tickerContent.innerHTML = data.items.map(item => `<a href="${item.link}" target="_blank" style="text-decoration: none; color: ${fontColor}; margin-right: 30px;">${item.title}</a>`).join('');
        } else {
            tickerContent.innerHTML = '<span>No items available</span>';
        }
    } catch (error) {
        tickerContent.innerHTML = `<span>Error loading feed</span>`;
    }
}

function refreshRSS() {
    fetchRSS();
    setInterval(fetchRSS, 3600000); // Refresh every hour
}

refreshRSS();