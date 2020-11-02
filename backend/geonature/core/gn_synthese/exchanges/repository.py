from .models import Synthese

from geonature.utils.env import DB


def get_synthese(id_synthese):
    '''
        get synthese for exchange
    '''

    synthese = (
        DB.session.query(Synthese)
        .filter_by(id_synthese=id_synthese)
        .one()
    )

    DB.session.commit()

    return synthese

def create_or_update_synthese(id_synthese=None, synthese_data=None):
    '''
        post or patch synthese for exchange
    '''

    DB.session.commit()

    synthese = (
        get_synthese(id_synthese)
        if id_synthese
        else Synthese()
    )


    # synthese from dict -> marshmallow
    synthese.from_dict(synthese_data, True)

    if not synthese.id_synthese:
        DB.session.add(synthese)

    DB.session.commit()

    return synthese


def delete_synthese(id_synthese):
    '''
        delete synthese
    '''

        
    (
        DB.session.query(Synthese)
        .filter_by(id_synthese=id_synthese)
        .delete()
    )
    DB.session.commit()
    
    return 
