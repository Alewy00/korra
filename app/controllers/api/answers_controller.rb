class Api::AnswersController < ApplicationController
    before_action :require_logged_in

    def create
        @answer= Answer.new(answer_params)
        @answer.author_id = current_user.id
        if @answer.save
            render "api/answers/show"
        else 
            render json: @answer.errors.full_messages, status: 422
        end
    end 

    def index 
        if params.has_key?(:question_id)
            question = Question.find_by(id: params[:question_id])
            @answers = question.answers 
        else  
            @answers = Answer.all 
        end
        render "api/answers/index"
    end

    def show
        @answer= Answer.find_by(id: params[:id])
        render "api/answers/show"
    end
    
    def update
        @answer = Answer.find(params[:id])
        if @answer.update(answer_params)
            render "api/answers/show"
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @answer = Answer.find(params[:id])
        @answer.destroy
        # render json: "hello"
        render json: ["deleted"]
    end

    def question_params
        params.require(:answer).permit(:body, :question_id)
    end
end