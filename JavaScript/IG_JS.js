--- Hide Report Setting Area 
function(config) {

    config.reportSettingsArea = false;
    return config;

}


--- HIDE FILTER
---------------
function(config) {

    config.reportSettingsArea = false;
    // may want to disable the highlights feature. Comment out this code to make initial highlight settings
    apex.util.getNestedObject(config, "views.grid.features").highlight = true;
    return config;

}


javascript:apex.event.trigger(document, 'ShowRegion',
	[{
	branch_code : '#COMPANY_BRANCH_CODE#',
	samity_code : '#SAMITY_CODE#',
	member_id   : '#MEMBER_ID#',
	loan_code   : '#LOAN_CODE#',
	dafa   	    : '#DAFA_NO#',
	from_date   : '#DISBURSE_DATE#',
	to_date     : '#MEMBER_ID#',
	]);void(0);
