<?php
class Jsn
{
   public $result='result';
  
}

$j = new Jsn();
$output = array();

$outpt = array();

$outpt = array($j->result=> 'Failed to save');

$output = array($j->result=> 'Saved successfully');
echo json_encode($output);
echo json_encode($outpt);
?>