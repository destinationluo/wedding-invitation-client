<?php


class Bless
{
    public $name;
    public $text;
    public $time;

    function __construct($bless)
    {
        $this->name = $bless['name'];
        $this->text = $bless['text'];
        $this->time = date('m-d H:i', strtotime($bless['create_time']));
    }

}