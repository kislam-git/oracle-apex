--Create a Collection

IF NOT APEX_COLLECTION.COLLECTION_EXISTS('collection_name') THEN 

                APEX_COLLECTION.CREATE_COLLECTION( P_COLLECTION_NAME => 'collection_name');	
			
END IF;


--- Add Member

  apex_collection.add_member(

              p_collection_name =>  'collection_name',
              p_c001    =>      R.PRODUCT_ID,
              p_c002    =>      R.ITEM_ID,
              p_c003    =>      R.ITEM_NAME,
              p_c004    =>      R.ITEM_SIZE,
              p_c005    =>      R.DISCOUNT_FLAG,
              p_n001    =>      R.UNIT_PRICE
        );

--- Delete Member 

  apex_collection.delete_member
            (
                p_collection_name => 'collection_name',
                p_seq => V_MAX_SQ_ID
            );
