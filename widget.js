// RSS Ticker Widget
// This script creates a simple RSS feed ticker widget that can be embedded in Notion or other platforms.
// It supports URL parameters for RSS feed URL, background color, and font color.

const urlParams = new URLSearchParams(window.location.search);

const feedUrl = urlParams.get('feed') || 'https://example.com/rss';
const bgColor = urlParams.get('bgColor') || '#000';
const fontColor = urlParams.get('fontColor') || '#fff';

const container = document.createElement('div');
container.style.position = 'fixed';
container.style.bottom = '0';
container.style.width = '100%';
container.style.backgroundColor = bgColor;
container.style.color = fontColor;
container.style.whiteSpace = 'nowrap';
container.style.overflow = 'hidden';
container.style.fontSize = '16px';
container.style.lineHeight = '30px';
container.style.fontFamily = 'Arial, sans-serif';

const tickerContent = document.createElement('div');
tickerContent.style.display = 'inline-block';
tickerContent.style.animation = 'scroll-left 10s linear infinite';

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
            tickerContent.innerHTML = data.items.map(item => `<span style='margin-right: 30px;'>${item.title}</span>`).join('');
        } else {
            tickerContent.innerHTML = '<span>No items available</span>';
        }
    } catch (error) {
        tickerContent.innerHTML = `<span>Error loading feed</span>`;
    }
}

fetchRSS();
