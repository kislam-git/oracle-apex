if ( Number($v("P5_CUR_MONTH_AMT")) > 0 )

            {
               apex.item("P5_COLL_AMT").hide();
               apex.item("P5_PENALTY_AMT").hide();
               apex.item( "DpsSv" ).hide();
                        
                
                apex.message.clearErrors();

                    apex.message.showErrors([
                      {
                        type: apex.message.TYPE.ERROR,
                        location: ["page", "inline"],
                        pageItem: "P5_CUR_MONTH_AMT",
                        message: "  aaaa" ,
                        unsafe: false
                      }
                    ]); 

            }
else if ( Number($v("P5_OUTSTANDING")) > 0 && Number($v("P5_DUE")) === 0 )
                {
                    apex.message.clearErrors(); 
                    apex.item( "P5_COLL_AMT" ).show();
                     apex.item( "DpsSv" ).show();
                     apex.item("P5_PENALTY_AMT").hide();
                }


else if ( Number($v("P5_OUTSTANDING")) > 0 && Number($v("P5_DUE")) > 0 )

            {
                   apex.message.clearErrors();
                
                    apex.item( "P5_COLL_AMT" ).show();
                   apex.item("P5_PENALTY_AMT").show();
                   apex.item( "DpsSv" ).show();
            }

else if ( Number($v("P5_SAVE_DAFA"))  > 0 &&  Number($v("P5_OUTSTANDING")) === 0 )
            {
                      apex.message.clearErrors();
                
                
                    apex.item("P5_COLL_AMT").hide();
                      apex.item("P5_PENALTY_AMT").hide();
                      apex.item( "DpsSv" ).hide();
                      
                       apex.message.clearErrors();

                        apex.message.showErrors([
                          {
                            type: apex.message.TYPE.ERROR,
                            location: ["page", "inline"],
                            pageItem: "P5_OUTSTANDING",
                            message: "aaaa" ,
                            unsafe: false
                          }
                        ]);                   
            }

else             {
                        
                
                       apex.message.clearErrors();
                    
                }
