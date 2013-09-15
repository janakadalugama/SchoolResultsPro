package  com.cinglevue.codeingchallenge.exception;

public class CinglevueException extends Exception {
	private String errorMessage;
	
	public CinglevueException(){
		super();
	}
	
	public CinglevueException(String message){
		this.errorMessage = message;
	}
	
	public String getErrorMessage(){
		return this.errorMessage;
	}
}
