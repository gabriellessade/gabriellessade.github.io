// Initialize tooltips
let tooltipTriggers = document.getElementsByClassName('copy-button');
let tooltips = [];

for (let i = 0; i < tooltipTriggers.length; i++)
{
    tooltips.push(new bootstrap.Tooltip(tooltipTriggers[i]));
}

// Content is copied to clipboard when the button is pressed and feedback is provided
for (let i = 0; i < tooltipTriggers.length; i++)
{
    let tooltipInstance = bootstrap.Tooltip.getInstance(tooltipTriggers[i]);
    let fieldContent = tooltipTriggers[i].parentNode.getElementsByClassName('form-control')[0].getAttribute('value');

    tooltipTriggers[i].addEventListener('click', function(){
        tooltipInstance.setContent({ '.tooltip-inner': 'Copied!'});
        navigator.clipboard.writeText(fieldContent);
    });

    tooltipTriggers[i].addEventListener('blur', function(){
        tooltipInstance.setContent({ '.tooltip-inner': 'Copy to clipboard'});
    });
}
// Credit: coding4Fun on Stack Overflow (https://stackoverflow.com/questions/65862446/bootstrap-5-update-tooltip-title-with-javascript)
