from flask import Blueprint
from flask import request
from app.components.userOperation import confirmForm
from app.components.questionnaireOperation import QuestionnaireForm, EditForm, TemplatesForm

questionnaire = Blueprint('questionnairepage', __name__, url_prefix='/questionnaire')


# 新建一个问卷
@questionnaire.route('/new', methods=['POST'])
def newQuestionnaire():
    data = request.json
    confirmForm(data['token']).confirmToken()
    QuestionnaireForm(data['userName']).newQuestionnaire(
        questionnaireFlag=str(data['questionnaireFlag']),
        questionnaireBasicData=data['questionnaireBasicData']
    )
    return "success"


@questionnaire.route('/edit/append_one_problem', methods=['POST'])
def appendOneProblem():
    data = request.json
    confirmForm(data['token']).confirmToken()
    editConfig = data['editConfig']
    form = EditForm(data['questionnaireFlag'])
    form.appendOneProblem(editConfig['common'], editConfig['problemId'])
    form.saveEdition()
    return "success"


@questionnaire.route('/edit/delete_one_problem', methods=['POST'])
def deleteOneProblem():
    data = request.json
    confirmForm(data['token']).confirmToken()
    editConfig = data['editConfig']
    form = EditForm(data['questionnaireFlag'])
    form.deleteOneProblem(editConfig['problemIndex'])
    form.saveEdition()
    return "success"


@questionnaire.route('/edit/append_one_option', methods=['POST'])
def appendOneOption():
    data = request.json
    confirmForm(data['token']).confirmToken()
    editConfig = data['editConfig']
    form = EditForm(data['questionnaireFlag'])
    form.appendOneOption(editConfig['problemIndex'], editConfig['optionData'])
    form.saveEdition()
    return "success"


@questionnaire.route('/edit/delete_one_option', methods=['POST'])
def deleteOneOption():
    data = request.json
    confirmForm(data['token']).confirmToken()
    editConfig = data['editConfig']
    form = EditForm(data['questionnaireFlag'])
    form.deleteOneOption(editConfig['problemIndex'], editConfig['optionIndex'])
    form.saveEdition()
    return "success"


@questionnaire.route('/edit/edit_questionniare_basic_info', methods=['POST'])
def editQuestionnaireBasicInfo():
    data = request.json
    confirmForm(data['token']).confirmToken()
    editConfig = data['editConfig']
    form = EditForm(data['questionnaireFlag'])
    form.editQuestionnaireBasicInfo(editConfig['basicInfo'])
    form.saveEdition()
    return "success"


@questionnaire.route('/edit/edit_problem_basic_info', methods=['POST'])
def editProblemBasicInfo():
    data = request.json
    confirmForm(data['token']).confirmToken()
    editConfig = data['editConfig']
    form = EditForm(data['questionnaireFlag'])
    form.editProblemBasicInfo(editConfig['problemIndex'], editConfig['title'], editConfig['globalSetting'])
    form.saveEdition()
    return "success"


@questionnaire.route('/edit/edit_option_value', methods=['POST'])
def editOptionValue():
    data = request.json
    confirmForm(data['token']).confirmToken()
    editConfig = data['editConfig']
    form = EditForm(data['questionnaireFlag'])
    form.editOptionValue(editConfig['problemIndex'], editConfig['optionIndex'], editConfig['value'])
    form.saveEdition()
    return "success"


@questionnaire.route('/get_data', methods=['POST'])
def getQuestionnaireData():
    data = request.json
    confirmForm(data['token']).confirmToken()
    data = QuestionnaireForm(data['userName']).getQuestionnaireData()
    pages = TemplatesForm().getTemplatesTotalPages()
    return {'status': 'success', 'information': data, "pages": pages}


@questionnaire.route('/get_data_by_flag', methods=['POST'])
def getQuesionNaireDataByFlag():
    data = request.json
    confirmForm(data['token']).confirmToken()
    data = QuestionnaireForm(data['userName']).getQuesionNaireByFlag(data['flag'])
    return {'status': 'success', 'information': data}


@questionnaire.route('/delete', methods=['POST'])
def deleteQuestionnaireData():
    data = request.json
    confirmForm(data['token']).confirmToken()
    QuestionnaireForm(data['userName']).deleteQuestionnaire(data['flag'])
    return {'status': 'success', 'information': 'deletesuccessful'}


@questionnaire.route('/spread', methods=['POST'])
def submitQuestionnaireSpreadData():
    data = request.json
    confirmForm(data['token']).confirmToken()
    QuestionnaireForm(data['userName']).submitSpreadData(data['dataDict'], data['flag'])
    return {'status': 'success', 'information': 'success'}


@questionnaire.route('/get_templates', methods=['GET'])
def getTemplatesData():
    page = request.args.get('page')
    tempForm = TemplatesForm().getTemplatesData(int(page))
    return {'status': 'success', 'information': tempForm}


@questionnaire.route('/copy_templates', methods=['POST'])
def copyTemplates():
    data = request.json
    confirmForm(data['token']).confirmToken()
    TemplatesForm().copyTemplatesData(data['flag'], data['user'])
    return {'status': 'success', 'information': data}
