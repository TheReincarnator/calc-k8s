package com.thomasjacob.calck8s.calck8sbackend;

import java.io.Serializable;

public class CalculationResult implements Serializable {
    public CalculationResult(String text) {
        this.text = text;
    }

    private String text;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
