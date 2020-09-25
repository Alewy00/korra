class Api::QuestionsController < ApplicationController
    before_action :require_logged_in

    def create
        @question = Question.new(question_params)
        @question.author_id = current_user.id
        if @question.save
            render "api/questions/show"
        else 
            render json: @question.errors.full_messages, status: 422
        end
    end 

    def index
        @questions = Question.all
        render "api/questions/index"
    end 

    def show
        @question = Question.find_by(id: params[:id])
        render "api/questions/show"
    end 

    def update
        @question = Question.find(params[:id])
        if @question.update(question_params)
            render "api/questions/show"
        else
            render json: @question.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        # render json: "hello"
        render json: ["deleted"]
    end

    def question_params
        params.require(:question).permit(:body)
    end
end