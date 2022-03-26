/**
 *@NApiVersion 2.1
 *@NScriptType ClientScript
 */
define(['N/currentRecord', 'N/search', 'N/ui/dialog'], (currentRecord, search, dialog) => {

    // Start PageInit
    function pageInit(context) {}

    function selectTariffType(context) {
        //#region Select Int'l Airfreight or Onsite only
        const options = {
            title: 'Select Tariff Type',
            message: 'Select the type of shipment this estimate is for. Please allow 1 minute for the tariff to calculate after clicking the button.',
            buttons: [{
                    label: 'Air TAS',
                    value: 1
                },
                {
                    label: 'Air FAS',
                    value: 2
                }

            ]
        };
        //#endregion
        function success(result) {
            const rec = currentRecord.get();
            const recordType = rec.type;
            //#region Get the fields required for the custcol_eym_fg_orig_rates
            const weightest = parseFloat(rec.getValue({
                fieldId: 'custbody_twi_chargeable_weight_est'
            }));
            const weightbk = parseFloat(rec.getValue({
                fieldId: 'custbody_charge_weight_kgs_bk'
            }));
            if (recordType == "estimate") {
                var weight = weightest;
            } else if (recordType == "salesorder") {
                var weight = weightbk;
            }
            const value = rec.getValue({
                fieldId: 'custbody_eym_fg_temporary_value'
            });
            const permValue = rec.getValue({
                fieldId: 'custbody_eym_fg_permanent_value'
            });
            const totalValue = parseFloat(rec.getValue({
                fieldId: 'custbody_total_customs_value'
            }));
            const cbmest = rec.getValue({
                fieldId: 'custbody82'
            });
            const cbmbk = rec.getValue({
                fieldId: 'custbody88'
            });
            if (recordType == "estimate") {
                var cbm = cbmest;
            } else if (recordType == "salesorder") {
                var cbm = cbmbk;
            }
            const cbmRound = Math.round(cbm);
            const customsValue = totalValue * 1.1;
            const permCustomsValue = permValue * 1.1;
            const hunWeight = Math.round(weight / 100);
            //#endregion
            // TAS Air Rate
            if (result == 1) {
                for (let step = 0; step < 11; step++) {
                    if (step == 0) {
                        var itemDescription = ;
                        var itemQuantity = ;
                        var itemBuy = ;
                        var itemSell = ;
                    }
                    //#region Create The New Line
                    rec.selectNewLine({
                        sublistId: 'item'
                    })
                    // Inbound Charges
                    // Basic Hanlding Charge
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'item',
                        value: 1261,
                        forceSyncSourcing: true
                    })
                    // Add item description
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'description',
                        value: itemDescription
                    })
                    // Add item quantity
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'quantity',
                        value: itemQuantity,
                        forceSyncSourcing: true
                    })

                    // Add Cost Estimate Type
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'costestimatetype',
                        value: 'CUSTOM',
                        forceSyncSourcing: true
                    })
                    // Add Vendor
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'custcol_eym_item_vendor',
                        value: 110175,
                        forceSyncSourcing: true
                    })
                    // Add Currency
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'custcol_eym_fg_currency',
                        value: 5,
                        forceSyncSourcing: true
                    })
                    // Add Estimated Unit Cost F/X
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'custcol_twi_est_unit_cost_fx',
                        value: itemBuy,
                        forceSyncSourcing: true
                    })
                    // Add Margin
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'custcol_eym_fg_orig_rate',
                        value: itemSell,
                    })
                    // Commmit The Item
                    rec.commitLine({
                        "sublistId": "item"
                    });
                    //#endregion
                }


                // Create The New Line

            }
            if (result == 2) {

                for (let step = 0; step < 11; step++) {
                    if (step == 0) {
                        var itemDescription = ;
                        var itemQuantity = ;
                        var itemBuy = ;
                        var itemSell = ;
                    }
                    
                   
                    //#region Create The New Line
                    rec.selectNewLine({
                        sublistId: 'item'
                    })
                    // Inbound Charges
                    // Basic Hanlding Charge
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'item',
                        value: 1261,
                        forceSyncSourcing: true
                    })
                    // Add item description
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'description',
                        value: itemDescription
                    })
                    // Add item quantity
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'quantity',
                        value: itemQuantity,
                        forceSyncSourcing: true
                    })

                    // Add Cost Estimate Type
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'costestimatetype',
                        value: 'CUSTOM',
                        forceSyncSourcing: true
                    })
                    // Add Vendor
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'custcol_eym_item_vendor',
                        value: 110175,
                        forceSyncSourcing: true
                    })
                    // Add Currency
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'custcol_eym_fg_currency',
                        value: 5,
                        forceSyncSourcing: true
                    })
                    // Add Estimated Unit Cost F/X
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'custcol_twi_est_unit_cost_fx',
                        value: itemBuy,
                        forceSyncSourcing: true
                    })
                    // Add Margin
                    rec.setCurrentSublistValue({
                        sublistId: 'item',
                        fieldId: 'custcol_eym_fg_orig_rate',
                        value: itemSell,
                    })
                    // Commmit The Item
                    rec.commitLine({
                        "sublistId": "item"
                    });
                    //#endregion
                }


                // Create The New Line

            }
        }

        function failure(reason) {
            console.log(`Failure: ${reason}`)
        }

        dialog.create(options).then(success).catch(failure);
    }

    return {
        selectTariffType,
        pageInit
    };
});