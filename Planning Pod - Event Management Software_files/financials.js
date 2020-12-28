/* -----------------------------------------------------------------
	This file holds the functions that control the calculations for
	the financial tools
	----------------------------------------------------------------- */

	/* -----------------------------------------------------------------
	calculate totals on the fly for line item forms
	proposals, invoices and templates
	----------------------------------------------------------------- */
	function calcLineItem(element,taxCalcMethod) {

		// first, we need to evaluate how/if tax will be calculated
		var taxRateSelection = $('select[name="taxRateID"]').val();

		/*
			tax setup for select to choose tax rate:
			-1 means that item is not taxable
			0 means that we are using a custom rate
			anything above 0 means it is the actula tax rate (1.25, 2.25, etc...)
		*/

		if (taxRateSelection == 0) {
			//custom rate, allow user to enter rate
			$('input[name="taxRate"]').prop('readonly',false);
		} else if (taxRateSelection == -1) {
			// not taxable, reset
			$('input[name="taxRate"]').prop('readonly',true);
			$('input[name="taxRate"]').val('0.00');
		} else {
			// using a preset tax rate
			var currTaxRate = $('select[name="taxRateID"] option:selected').attr('data-taxRate');
			currTaxRate = parseFloat(currTaxRate).toFixed(3);
			$('input[name="taxRate"]').prop('readonly',true);
			$('input[name="taxRate"]').val(currTaxRate);
		}


		//GET QUANTITY
		if ( $(element).closest('#calculate-wrapper').find('.quantityInput').val() == '' || isNaN( $(element).closest('#calculate-wrapper').find('.quantityInput').val() ) ) {
			var quantity = 0;
		} else {
			var quantity = $(element).closest('#calculate-wrapper').find('.quantityInput').val();
		}

		//GET COST
		if ( $(element).closest('#calculate-wrapper').find('.costInput').val() == '' || isNaN( $(element).closest('#calculate-wrapper').find('.costInput').val() ) ) {
			var cost = 0;
		} else {
			var cost = $(element).closest('#calculate-wrapper').find('.costInput').val();
		}

		//GET MARKUP
		if ( $(element).closest('#calculate-wrapper').find('.markupInput').val() == '' || isNaN( $(element).closest('#calculate-wrapper').find('.markupInput').val() ) ) {
			var markup = 0;
		} else {
			var markup = $(element).closest('#calculate-wrapper').find('.markupInput').val()/100;
		}

		//GET SALES TAX
		if ( $(element).closest('#calculate-wrapper').find('.taxRateInput').val() == '' || isNaN( $(element).closest('#calculate-wrapper').find('.taxRateInput').val() ) ) {
			var salesTax = 0;
		} else {
			var salesTax = $(element).closest('#calculate-wrapper').find('.taxRateInput').val()/100;
		}

		//CALCULATE SUBTOTAL
		var itemAmount = quantity * cost;
		$(element).closest('#calculate-wrapper').find('.calcItemAmount').html(itemAmount.toFixed(2));

		//CALCULATE ITEM TOTAL & SHOW MARKUP
		if (markup == 0 && salesTax == 0) {
			var itemTotal = itemAmount;
			$(element).closest('#calculate-wrapper').find('.markupAmount').html('0.00');
			$(element).closest('#calculate-wrapper').find('.salesTaxAmount').html('0.00');
		} else if (markup != 0 && salesTax != 0) {
				var markupAmount = itemAmount * markup;
				// swap tax calculation methods
				if (taxCalcMethod == 'before') {
					var salesTaxAmount = itemAmount * salesTax;
				} else {
					var salesTaxAmount = (itemAmount + markupAmount) * salesTax;
				}
				var itemTotal = itemAmount + markupAmount + salesTaxAmount;
				$(element).closest('#calculate-wrapper').find('.markupAmount').html(markupAmount.toFixed(2));
				$(element).closest('#calculate-wrapper').find('.salesTaxAmount').html((Math.round( salesTaxAmount * 100 ) / 100).toFixed(2));
		} else if (markup != 0 && salesTax == 0) {
				var markupAmount = itemAmount * markup;
				var itemTotal = itemAmount + markupAmount;
				$(element).closest('#calculate-wrapper').find('.markupAmount').html(markupAmount.toFixed(2));
				$(element).closest('#calculate-wrapper').find('.salesTaxAmount').html('0.00');
		} else if (markup == 0 && salesTax != 0) {
				var salesTaxAmount = itemAmount * salesTax;
				var itemTotal = itemAmount + salesTaxAmount;
				$(element).closest('#calculate-wrapper').find('.salesTaxAmount').html(salesTaxAmount.toFixed(2));
				$(element).closest('#calculate-wrapper').find('.markupAmount').html('0.00');
		}

		//DISPLAY ITEM TOTAL
		$(element).closest('#calculate-wrapper').find('.calcItemTotal').html(itemTotal.toFixed(2));

	}













